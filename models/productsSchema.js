import mongoose from 'mongoose';

const ProductsSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    quantity:{
        type:Number,
        required:true
    }
},{
    timestamps:true
})

const ProductModel =  mongoose.model('Products',ProductsSchema);
export default ProductModel;