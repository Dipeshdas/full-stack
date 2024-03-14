
const fs=require('fs');
// const index=fs.readFileSync('index.html','utf-8');
// const data=JSON.parse(fs.readFileSync('data.json','utf-8'));
// const products=data.products;

const model=  require('../Model/product');
const { log } = require('console');
const Product=model.Product;

exports.createProduct=(req,res)=>{
    const product=new Product(req.body);
    
    product.save();
    // res.json(products)
    res.status(201).json(req.body);

}

exports.readProduct=async (req,res)=>{
    const products = await Product.find();
    // const products = await Product.find({price:{$gte:500}});
    res.json(products);

}
 
exports.readProductwithId=async (req,res)=>{
    // console.log(req.params.id);
    const id=req.params.id;

    // const product=products.find(p=>p.id==+id);
    const product = await Product.findById(id);

    res.json(product)

}

exports.replaceProduct=async (req,res)=>{
    const id=req.params.id;
    const product = await Product.findOneAndReplace({_id:id},req.body,{new:true});

    // const productIndx=products.findIndex(p=>p.id==+id);
    // products.splice(productIndx,1,{...req.body,id:id});    
    res.send(product)
}

exports.updateProduct= async (req,res)=>{
    const id=req. params.id;

    // const productIndx=products.findIndex(p=>p.id==+id);
    // const product=products[productIndx];
    
    // products.splice(productIndx,1,{...product,...req.body});    
    const product = await Product.findByIdAndUpdate({_id:id},req.body,{new:true});
    res.send(product)
}

exports.deleteProduct=async (req,res)=>{
    const id=req.params.id;

    // const productIndx=products.findIndex(p=>p.id==+id);
    // const product=products[productIndx];
    // products.splice(productIndx,1);  

    const product = await Product.findByIdAndDelete(id);
    res.send(product)  

}