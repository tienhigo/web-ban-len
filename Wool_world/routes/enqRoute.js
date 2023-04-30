const express = require('express');
const { 
    createEnquiry, 
    updateEnquiry, 
    deleteEnquiry, 
    getEnquiry,
    getAllEnquiry
} = require('../controllers/enqCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddlewares');
const router = express.Router();
router.post('/', createEnquiry);
router.put('/:id',authMiddleware,isAdmin, updateEnquiry);
router.delete('/:id',authMiddleware,isAdmin, deleteEnquiry);
router.get('/:id', getEnquiry);
router.get('/', getAllEnquiry);
module.exports =router;