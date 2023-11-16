import express from 'express';
import ProductsController from '../controller/productsController.js';

const productsController = new ProductsController();   //creating instance of ProductsController

const productRouter = express.Router();  



productRouter.get('/',productsController.getAllProduct);  //fetches all products


productRouter.post('/create',productsController.addProduct);  //creates product
productRouter.post('/:id/update_quantity',productsController.updateProduct);  //updates products using productId

productRouter.delete('/:id',productsController.deleteProduct); //deletes product using productId


export default productRouter;

