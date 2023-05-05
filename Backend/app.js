const express = require("express")
const morgan = require("morgan")
const rateLimit = require("express-rate-limit")
const helmet = require("helmet")
const mongoSanitize = require("express-mongo-sanitize")
const xss = require("xss-clean")
const hpp = require("hpp")
const bodyParser = require("body-parser");
const cors = require("cors")

const AppError = require("./Utils/appError")
const globalErrorHandler = require("./controllers/errorController")
const nftsRouter = require("./routes/nftsRoute")
const usersRouter = require("./routes/usersRoute")

const app = express()
app.use(express.json({limit: "10kb"}))

app.use(bodyParser.json());

const corsOptions = {
    origin: '*',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))

// DATA SANITIZATION AGAINST NoSQL QUERY INJECTION
app.use(mongoSanitize())

// DATA SANITIZATION against site script XSS
app.use(xss())

// PREVENT PARAMETER POLLUTION
app.use(hpp())

//SECURE HEADER HTTP
app.use(helmet({
    whitelist: [
        "duration", 
        "difficulty", 
        "maxGroupSize", 
        "price", 
        "ratingsAverage",
        "ratingsQuantity"
    ]
}))

//GLOBAL MIDDLEWARE

// if (process.env.NODE_ENV === "development") {
//     app.use(morgan("dev"))
// }

//RATE LIMIT
const limiter = rateLimit({
    max: 100,
    windowsMs: 60 * 60 * 1000,
    message: "Too many request from this IP, please try again in an hour"
})

app.use("/api", limiter)

app.use(morgan("dev"))
//SERVING TEMPLATE DEMO
app.use(express.static(`${__dirname}/nft-data/img`))

//CUSTOM MIDDLE WARE
// app.use((req, res, next) => {
//     console.log("Hey i am from middleware function")
//     next()
// })

// app.use((req, res, next) => {
//     req.requestTime = new Date().toISOString()
//     // console.log(req.headers)
//     next()
// })

app.use("/api/v1/users", usersRouter)
app.use("/api/v1/nfts", nftsRouter)

//ERROR SECTION

app.all("*", (req, res, next) => {
    // res.status(404).json({
    //     status: "fail",
    //     message: `can't find ${req.originalUrl} on this server`
    // })

    // const err = new Error(`can't find ${req.originalUrl} on this server`)
    // err.status = "fail"
    // err.statusCode = 404
    // next(err)

    next(new AppError(`Can't find ${req.originalUrl} on this server`, 404))
})

//GLOBAL ERROR HANDLING
app.use(globalErrorHandler)

module.exports = app