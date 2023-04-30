const express = require("express");
const { 
    createCoupon, 
    getAllCoupons, 
    updateCoupon,
    deleteCoupon,
    getCoupon } = require("../controllers/couponCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddlewares");
const router = express.Router();

router.post('/',authMiddleware,isAdmin, createCoupon);
router.get('/', authMiddleware,isAdmin, getAllCoupons);
router.get('/:id', authMiddleware,isAdmin, getCoupon);
router.put('/:id',authMiddleware,isAdmin, updateCoupon);
router.delete('/:id',authMiddleware,isAdmin, deleteCoupon);

module.exports = router;