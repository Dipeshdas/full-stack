
const fs=require('fs');
// const index=fs.readFileSync('index.html','utf-8');
const data=JSON.parse(fs.readFileSync('data.json','utf-8'));
const users=data.users;

exports.createUser=(req,res)=>{
    console.log(req.body);
    users.push(req.body);
    res.json(users)

}

exports.readUser=(req,res)=>{
    res.json(users);

}

exports.readUserwithId=(req,res)=>{
    // console.log(req.params.id);
    const id=req.params.id;

    const product=users.find(p=>p.id==+id);
    res.json(product)

}

exports.replaceUser=(req,res)=>{
    const id=req.params.id;

    const productIndx=users.findIndex(p=>p.id==+id);
    users.splice(productIndx,1,{...req.body,id:id});    
    res.send(users)
}

exports.updateUser=(req,res)=>{
    const id=req.params.id;

    const productIndx=users.findIndex(p=>p.id==+id);
    const product=users[productIndx];
    users.splice(productIndx,1,{...product,...req.body});    
    res.send(users)
}

exports.deleteUser=(req,res)=>{
    const id=req.params.id;

    const productIndx=users.findIndex(p=>p.id==+id);
    const product=users[productIndx];
    users.splice(productIndx,1);  
    res.send(users)  

}