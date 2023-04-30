const express = require("express");
const {

    uploadImages,
    deleteImages
} = require("../controllers/uploadCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddlewares");
const { uploadPhoto, productImgResize } = require("../middlewares/uploadImages");
const router = express.Router();


router.post(
    "/",
    authMiddleware,
    isAdmin,
    uploadPhoto.array('images', 10),
    productImgResize,
    uploadImages);

router.delete("/delete-img/:id", authMiddleware, isAdmin, deleteImages);

module.exports = router;
