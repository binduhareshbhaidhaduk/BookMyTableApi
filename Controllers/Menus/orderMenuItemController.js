import { populate } from "dotenv";
import orderMenuModel from "../../model/Menu/orderMenuItem.js";

export const addOrderMenu = async (req, res) => {
    try {
        const orderMenu = await new orderMenuModel(req.body);
        await orderMenu.save();
        console.log('add order menu item....');
        res.status(200).json(orderMenu);
    } catch (err) {
        res.status(400).json(err);
    }
}

export const getOrderMenu = async (req,res)=>{
    try{
        const orderMenu = await orderMenuModel.find().populate({
            path: 'menuItem',
            populate:[{
                path: 'menuIngredient',
                populate:{
                    path: 'ingredient',
                    populate:{
                        path: 'type'
                    }
                }
            },{
                path:'menu'
            }],
        }).populate({
            path: 'order',
            populate:[{
                path: 'table'
            },
            {
                path: 'staff',
                populate:({path:'staffrole'})
            }]
        });
        console.log('get all order menu...',orderMenu)
        res.status(200).json(orderMenu);
        }catch(err){
            res.status(400).json(err);
        }
};

export const singleOrderMenu = async (req,res)=>{
    try{
        const id = req.params.id;
        const orderMenu = await orderMenuModel.findById(id).populate({
            path: 'menuItem',
            populate:[{
                path: 'menuIngredient',
                populate:{
                    path: 'ingredient',
                    populate:{
                        path: 'type'
                    }
                }
            },{
                path:'menu'
            }],
        }).populate({
            path: 'order',
            populate:[{
                path: 'table'
            },
            {
                path: 'staff',
                populate:({path:'staffrole'})
            }]
        });
        console.log('get single order menu...')
        res.status(200).json(orderMenu);
    }catch(err){
        res.status(400).json(err)
    }
}

export const upadteOrderMenu=  async (req,res)=>{
    try{
        const id = req.params.id;
        const updateData=req.body;
        const orderMenu = await orderMenuModel.findByIdAndUpdate(id,updateData,{new:true}).populate({
            path: 'menuItem',
            populate:[{
                path: 'menuIngredient',
                populate:{
                    path: 'ingredient',
                    populate:{
                        path: 'type'
                    }
                }
            },{
                path:'menu'
            }],
        }).populate({
            path: 'order',
            populate:[{
                path: 'table'
            },
            {
                path: 'staff',
                populate:({path:'staffrole'})
            }]
        });
        console.log('update order menu...')
        res.status(200).json(orderMenu);
    }catch(err){
        res.status(400).json(err);
    }
}


export const deleteOrderMenu=  async (req,res)=>{
    try{
        const id = req.params.id;
        const deleteOrderMenu = await orderMenuModel.findByIdAndDelete(id);
        console.log('delete order menu...')
        res.status(200).json(deleteOrderMenu);
    }catch(err){
        res.status(400).json(err);
    }
}
