const express = require('express');
const { 
    createBrand, 
    updateBrand, 
    deleteBrand, 
    getBrand,
    getAllBrand
} = require('../controllers/brandCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddlewares');
const router = express.Router();
router.post('/',authMiddleware,isAdmin, createBrand);
router.put('/:id',authMiddleware,isAdmin, updateBrand);
router.delete('/:id',authMiddleware,isAdmin, deleteBrand);
router.get('/:id', getBrand);
router.get('/', getAllBrand);
module.exports =router;