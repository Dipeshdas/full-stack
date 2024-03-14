
const express=require('express');
const userRouter=express.Router();
const UserController=require('../Controller/user')

userRouter.post('/',UserController.createUser)
.get('/',UserController.readUser)
.get('/:id',UserController.readUserwithId)
.put('/:id',UserController.readUserwithId)
.patch('/:id',UserController.updateUser)
.delete('/:id',UserController.deleteUser)

exports.UserRouter=userRouter;