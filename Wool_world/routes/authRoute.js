const express = require("express");
const { createUser,
    loginUserCtrl,
    getallUser,
    getaUser,
    deleteaUser,
    updatedUser,
    blockUser,
    unblockUser,
    handlerRefreshToken,
    logout,
    updatePassword,
    forgotPasswordToken,
    resetPassword,
    loginAdmin,
    getWishlist,
    saveAddress,
    userCart,
    getUserCart,
    createOrder,
    removeProductFromCart,
    updateProductQuantityFromCart,
    getMyOrders,
    getMonthWiseOrderIncome,

    getYearlyTotalOrders,
    getAllOrders,
    getSingleOrder,
    updateOrder
} = require("../controllers/userCtrl");
const {
    authMiddleware,
    isAdmin } = require("../middlewares/authMiddlewares");
const { checkout, paymentVerification } = require("../controllers/paymentCtrl");
const router = express.Router();
router.post("/register", createUser);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);
router.put('/password', authMiddleware, updatePassword);
// router.put("/order/update-order/:id", 
// authMiddleware, isAdmin, updateOrderStatus);

router.post("/login", loginUserCtrl);
router.post("/admin-login", loginAdmin);
router.post("/cart", authMiddleware, userCart);
router.post("/order/checkout", authMiddleware, checkout);
router.post("/order/paymentVerification", authMiddleware, paymentVerification);
router.post("/cart/create-order", authMiddleware, createOrder);

router.get('/all-users', getallUser);
router.get('/getmyorders', authMiddleware, getMyOrders);
router.get("/getMonthWiseOrderIncome", authMiddleware, getMonthWiseOrderIncome);

router.get("/getYearlyTotalOrders", authMiddleware, getYearlyTotalOrders);
// router.post("/cart/applycoupon", authMiddleware, applyCoupon);

router.get("/get-cart", authMiddleware, getUserCart);
router.get('/get-all-orders', authMiddleware, isAdmin, getAllOrders);
router.get("/getaOrder/:id",authMiddleware, isAdmin, getSingleOrder)
router.put("/updateOrder/:id",authMiddleware, isAdmin, updateOrder)
// router.post('/getorderbyuser/:id', authMiddleware, isAdmin, getOrderByUserId);
router.get('/refresh', handlerRefreshToken);
router.get('/logout', logout);
router.get('/:id', authMiddleware, isAdmin, getaUser);
router.get('/wishlist', authMiddleware, getWishlist);
router.delete("/delete-product-cart/:cartItemId", authMiddleware, removeProductFromCart);
router.delete("/update-product-cart/:cartItemId/:newQuantity", authMiddleware, updateProductQuantityFromCart);
router.delete('/:id', deleteaUser);
router.put('/edit-user', authMiddleware, updatedUser);
router.put("/save-address", authMiddleware, isAdmin, saveAddress);
router.put('/block-user/:id', authMiddleware, isAdmin, blockUser);
router.put('/unblock/:id', authMiddleware, isAdmin, unblockUser);

module.exports = router;