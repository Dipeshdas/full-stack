
const express=require('express');
const router=express.Router();
const productController=require('../Controller/product')

router.post('/',productController.createProduct)
.get('/',productController.readProduct)
.get('/:id',productController.readProductwithId)
.put('/:id',productController.replaceProduct)
.patch('/:id',productController.updateProduct)
.delete('/:id',productController.deleteProduct)

exports.productRouter=router;