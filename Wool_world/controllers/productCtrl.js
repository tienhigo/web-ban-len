const Product = require('../models/productModel');
const asyncHandler = require("express-async-handler");
const slugify = require('slugify');
const validateMongoDbId = require('../utils/validateMongodbid');
const User = require('../models/userModel');

//create a product
const createProduct = asyncHandler(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const newProduct = await Product.create(req.body);
        res.json(newProduct);
    }
    catch (error) {
        throw new Error(error);
    }

});

//update a product
const updateProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const updateProduct = await Product.findOneAndUpdate(id, req.body, {
            new: true
        });
        res.json(updateProduct);
    }
    catch (error) {
        throw new Error(error);

    }
});

//delete a product
const deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const deleteProduct = await Product.findOneAndDelete(id);
        res.json(deleteProduct);
    }
    catch (error) {
        throw new Error(error);

    }
});


//get a product
const getaProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const findProduct = await Product.findById(id)
        .populate("color");
        res.json(findProduct);

    }
    catch (error) {
        throw new Error(error);

    }
})

//get all products
const getAllProduct = asyncHandler(async (req, res) => {

    try {
        //Filtering
        const queryObj = { ...req.query };
        const excludeFields = ['page', 'sort', 'limit', 'fields'];
        excludeFields.forEach((el) => delete queryObj[el]);
        console.log(queryObj);

        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);


        let query = Product.find(JSON.parse(queryStr));


        //Sorting
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(" ");
            query = query.sort(sortBy)

        }
        else {
            query = query.sort("-createdAt");

        }

        //Limiting
        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(" ");
            query = query.select(fields);
        }
        else {
            query = query.select('-__v');
        }

        //Pagination

        const page = req.query.page;
        const limit = req.query.limit;
        const skip = (page - 1) * limit;
        query = query.skip().limit(limit);
        if (req.query.page) {
            const productCount = await Product.countDocuments();
            if (skip >= productCount) throw new Error('This Page does not exists');
        }
        console.log(page, limit, skip);

        const product = await query;
        res.json(product);
        const getallProduct = await Product.find(queryObj);
        res.json(getallProduct);
    }
    catch (error) {
        throw new Error(error);

    }
});
//ADD TO WISHLIST
const addToWishList = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { proId } = req.body;
    try {
        const user = await User.findById(_id);
        const alreadyadded = user.wishlist.find((id) => id.toString() === proId);
        if (alreadyadded) {
            let user = await User.findByIdAndUpdate(
                _id, {
                $pull: { wishlist: proId },
            },
                {
                    new: true
                }
            );
            res.json(user);
        }
        else {
            let user = await User.findByIdAndUpdate(
                _id,
                {
                    $push: { wishlist: proId },
                },
                {
                    new: true
                }
            );
            res.json(user);

        }
    }
    catch (error) {
        throw new Error('error');

    }
});
//RATING
const rating = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { star, prodId, comment } = req.body;
    try {
        const product = await Product.findById(prodId);
        let alreadyRated = product.ratings.find(
            (userId) => userId.postedby.toString() === _id.toString()
        );
        if (alreadyRated) {
            const updateRating = await Product.updateOne(
                {
                    ratings: { $elemMatch: alreadyRated },
                },
                {
                    $set: { "ratings.$.star": star, "ratings.$.comment":comment },
                },
                {
                    new: true,
                }
            );
        }
        else {
            const rateProduct = await Product.findByIdAndUpdate(
                prodId,
                {
                    $push: {
                        ratings: {
                            star: star,
                            postedby: _id,
                        },
                    },
                },
                {
                    new: true,
                }
            );
        }
        const getallratings = await Product.findById(prodId);
        let totalRating = getallratings.ratings.length;
        let ratingsum = getallratings.ratings
            .map((item) => item.star)
            .reduce((prev, curr) => prev + curr, 0);
        let actualRating = Math.round(ratingsum / totalRating);
        let finalproduct = await Product.findByIdAndUpdate(
            prodId,
            {
                totalRating: actualRating,
            },
            { new: true }
        );
        res.json(finalproduct);
    }

    catch (error) {
        throw new Error(error);
    }

})

module.exports = {
    createProduct,
    getaProduct,
    getAllProduct,
    updateProduct,
    deleteProduct,
    addToWishList,
    rating,
};