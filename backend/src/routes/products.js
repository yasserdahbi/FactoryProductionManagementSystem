const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProductById);
router.get('/:id/batches/:batchNumber', productsController.getBatch);
router.post('/', productsController.createProduct);
router.post('/:id/batches', productsController.addBatchToProduct);
router.post('/:id/batches/:batchNumber/steps', productsController.addNextStep);

module.exports = router;
