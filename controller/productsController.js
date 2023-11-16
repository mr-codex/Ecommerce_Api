
import ProductModel from "../models/productsSchema.js";

export default class ProductsController {

    async addProduct(req, res) {

        try {

            const product = req.body.product;
            await ProductModel.create(product); // creates product
            
            return res.status(201).json({
                "data": {
                    "product": {
                        "name": product.name,
                        "quantity": product.quantity
                    }
                }
            })
        } catch (err) {

            console.log("Error in add product ::::", err);
            return res.status(500).send("Something went wrong");
        }
    }


    async getAllProduct(req, res) {


        try {

            const products = await ProductModel.find({}).select('_id name quantity');  // fetches every product from db

            let data = { "products": [] };  // creating json object : data

            //pushes each product in data.products
            products.forEach((product) => {
                data.products.push(product);
            })

            //returning data object as response
            return res.status(200).send({
                "data": data
            });

        } catch (err) {

            console.log("Error in Getting products ", err);
            return res.status(500).send("Something went wrong");
        }
    }


    async deleteProduct(req, res) {

        try {

            const deleted = await ProductModel.findByIdAndDelete(req.params.id);  // deleting product using productId

            if (deleted) {

                //case : product found and deleted
                return res.status(200).send( {
                    "data": {
                        "message":"product deleted"
                    }
                })
            }else{

                // Case :  product not found
                return res.status(404).send({
                    "data":{
                        "message":"product not found"
                    }
                })
            }

        } catch (err) {

            console.log("Error in deleting product ::: ", err);
            return res.status(500).send("Something went wrong");
        }
    }

    async updateProduct(req, res) {
        
        try{

            const number = parseInt(req.query.number);  //parsing number to integer

            const product = await ProductModel.findById(req.params.id).select('id name quantity'); // fetching product by id

            if(product){                      // product found

                if(product.quantity+number<0){    // handling case :  updated quantity is negative
                    product.quantity = 0;
                }else{
                    product.quantity = product.quantity+number;  
                }

                product.save();   //saving update product

                return res.status(201).send({
                    "data":{
                        "product":{
                            "id":product.id,
                            "name":product.name,
                            "quantity":product.quantity
                        },
                        "message":"updated successfully"
                    }
                })

            }else{

                return res.status(404).send({
                    "data":{
                        "message":"product not found"
                    }
                })
            }

        }catch(err){

            console.log("Error in updating product ::: ", err);
            return res.status(500).send("Something went wrong");
        }
    }
}