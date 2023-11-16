import express from 'express';
import productRouter from './products.js';

const indexRouter = express.Router();


indexRouter.use('/products',productRouter);  //handles all products related requests

indexRouter.use((req,res)=>{                    // handles invalid url requests
    res.status(404).send("API not found");
})

export default indexRouter;

