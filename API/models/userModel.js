const crypto = require("crypto")
const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")

//name, email, photo, password, passwordConfirmed

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please tell us your name"]
    },
    email: {
        type: String,
        required: [true, "Please provide your email"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "please provide a valid email address"]
    },
    // photo: {
    //     type: String,
    // },
     photo: String,

     role: {
        type: String,
        enum: ["user", "creator", "admin", "guide"],
        default: "user"

     },
     password: {
        type: String,
        required: [true, "please provide a password"],
        minlength: 8,
        select: false
     },
     passwordConfirm: {
        type: String,
        required: [true, "please confirm your password"],
        validate: {
            //THIS will only work on save or create 
            validator: function(el){
                return el == this.password  //abc === abc true, abc == acb false
            },
            message: "Password is not the same"
        }
     },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
        type: Boolean,
        default: true,
        select: false
    }
    
})

userSchema.pre("save", function (next) {
    if (!this.isModified("password") || this.isNew) return next()

    this.passwordChangedAt = Date.now() - 1000
    next()
})

userSchema.pre(/^find/, function (next) {
    this.find({ active: { $ne: false } })

    next()
})

userSchema.pre("save", async function (next) {
    //PASSWORD MODIFIED
    if(!this.isModified("password")) return next()
    //HASH PASSWORD
    this.password = await bcrypt.hash(this.password, 12)
    //DELETES CONFIRM PASSWORD
    this.passwordConfirm = undefined
    next()
})

userSchema.methods.correctPassword = async function (
    candidatePassword,
    userPassword
) {
    return await bcrypt.compare(candidatePassword, userPassword)
}

userSchema.methods.changedPasswordAfter = function(JWTTimestamp){
   if (this.passwordChangedAt) {
    const changedTimeStamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10 )
    
    return JWTTimestamp < changedTimeStamp  //300 < 200

    console.log(this.passwordChangedAt, JWTTimestamp)
   }

   //WE WANT TO RETURN FALSE BY DEFAULT
   return false
}

userSchema.methods.createPasswordResetToken = function(){
   const resetToken = crypto.randomBytes(32).toString("hex")

   this.passwordResetToken = crypto.createHash("sha256").update(resetToken).digest("hex")

   console.log({resetToken}, this.passwordResetToken)

   this.passwordResetExpires = Date.now() + 10 * 60 * 1000

   return resetToken
}

const User = mongoose.model("User", userSchema)

module.exports = User