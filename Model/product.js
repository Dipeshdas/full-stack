//Schema
const mongoose = require("mongoose");
const { Schema } = mongoose;
const productSchema = new Schema({
    title: {type:String,required:true},
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: {type:Number,min :[0,'Wrong min Ratings'], max:[5,'Wrong max Ratings']},
    stock: Number,
    brand: {type:String,required:true},
    category: String,
    thumbnail: {type:String,required:true},
    images: [String],
  });
  
  exports.Product = mongoose.model("Product", productSchema);