const NFT = require("./../models/nftModels")
const APIFeatures = require("./../Utils/apiFeatures")
const catchAsync = require("../Utils/catchAsync")
const AppError = require("../Utils/appError")

exports.aliasTopNFTs = (req, res, next) => {
    req.query.limit = "5"
    req.query.sort = "-ratingsAverage, price"
    req.query.fields = "name, price, ratingsAverage,difficulty"
    next()
}

exports.getAllNfts = catchAsync(async (req, res, next) => {
    
        const  features = new APIFeatures(NFT.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .pagination()
        const nfts = await features.query

        //SEND QUERY
        res.status(200).json({
            status: "success",
            results: nfts.length,
            data: {
                nfts ,
               }
        })
})

//POST METHOD
exports.createNFT = catchAsync(async (req, res, next) => {
const newNFT = await NFT.create(req.body)

res.status(201).json({
    status: "success",
    data: {
        nft: newNFT
    }
})
})
//GET SINGLE NFT
exports.getSingleNft = catchAsync(async (req, res, next) => {
        const nft = await NFT.findById(req.params.id)

        if(!nft) {
            return next(new AppError('No nft found with that ID', 400))
        }

        res.status(200).json({
            status: "success",
            data: {
                nft
            }
        })   
})
//PATCH METHOD
exports.updateNFT = catchAsync(async (req, res, next) => {

        const nft = await NFT.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        if(!nft) {
            return next(new AppError('No nft found with that ID', 400))
        }


        res.status(200).json({
            status: "success",
            data: {
                nft,
            }
        })  
})
//DELETE METHOD
exports.deleteNFT = catchAsync(async (req, res, next) => {

      const nft = await NFT.findByIdAndDelete(req.params.id)

        if(!nft) {
            return next(new AppError('No nft found with that ID', 400))
        }

        res.status(204).json({
            status: "success",
            message: null
        })
})

exports.getNFTsStats = catchAsync(async (req, res, next) => {

        const stats = await NFT.aggregate([
            {
                $match: { ratingsAverage: { $gte: 4.5 }}
            },
            {
                $group: {
                    _id: { $toUpper: "$difficulty" },
                    numNFT: {$sum: 1},
                    numRatings: {$sum: "$ratingsQuantity"},
                    avgRating: {$avg: "$ratingsAverage"},
                    avgPrice: {$avg: "$price"},
                    minPrice: {$min: "$price"},
                    maxPrice: {$max: "$price"}
                }
            },
            {
                $sort:  {avgRating: 1 }
            },
            {
                $match: {
                  _id: {$ne: "EASY"}
                }
            }
        ])
        res.status(200).json({
            status: "success",
            data: {
                stats
            }
        }) 
})

exports.getMonthlyPlan = catchAsync(async (req, res, next) => {

        const year = req.params.year * 1
        const plan = await NFT.aggregate([
            {
                $unwind: "$startDates"
            },
            {
                $match: {
                    startDates: {
                        $gte: new Date(`${year}-01-01`),
                        $gte: new Date(`${year}-12-31`)
                    }
                }
            },
            {
                $group: {
                    _id: {$month: "$startDates"},
                    numNFTStarts: {$sum: 1},
                    nfts: { $push: "$name"}
                }
            },
            {
                $addFields: {
                  month: "$_id"
                }
            },
            {
                $project: {
                  _id: 0
                }
            },
            {
                $sort: {
                    numNFTStarts: -1
                }
            },
            {
                $limit: 3
            }
        ])
        res.status(200).json({
            status: "success",
            data: plan
        })
})