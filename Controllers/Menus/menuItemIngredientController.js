import menuItemIngedientModel from "../../model/Menu/menuItemIngredient.js";

export const addMenuItemIngredient = async (req, res) => {
    try {
        const menuItemIngredient = new menuItemIngedientModel(req.body);
        await menuItemIngredient.save();
        console.log('add menu item Ingredient....')
        res.status(200).json(menuItemIngredient);
    }
    catch (err) {
        res.status(400).json({ message: "menuItemIngredient added successfully" });
    }

}

export const getMenuItemIngredient = async (req, res) => {
    try {
        const menuItemIngredient = await menuItemIngedientModel.find().populate({
            path: 'ingredient',
            populate: 'type'
        }).populate({
            path: 'menuItem',
            populate: 'menu'
        });
        console.log('get menu item ingredient...',menuItemIngredient);
        res.status(200).json(menuItemIngredient);
    }
    catch (err) {
        res.status(400).json({ message: "menuItemIngredient not found" });
    }
}

export const singleMenuItemIngredient = async (req, res) => {
    try {
        const id =req.params._id
        const menuItemIngredient = await menuItemIngedientModel.findById(id).populate({
            path: 'ingredient',
            populate: 'type'
        }).populate({
            path: 'menuItem',
            populate: 'menu'
        });
        console.log('get single menu item ingredient...',menuItemIngredient)
        res.status(200).json(menuItemIngredient);
    }
    catch (err) {
        res.status(400).json({ message: "menuItemIngredient not found" });
    }
}

export const updateMenuItemIngredient = async (req, res) => {
    try {
        const id =req.params._id
        console.log('update id',id)
        const updateData = req.body;
        const menuItemIngredient = await menuItemIngedientModel.findByIdAndUpdate(id,updateData,{new:true}).populate({
            path: 'ingredient',
            populate: 'type'
        }).populate({
            path: 'menuItem',
            populate: 'menu'
        });
        console.log('update menu item ingredient...',menuItemIngredient);
        res.status(200).json(menuItemIngredient);
    }
    catch (err) {
        res.status(400).json({ message: "menuItemIngredient not found" });
    }
}

export  const deleteMenuItemIngredient = async (req, res) => {
    try {
        const id = req.params._id
        await menuItemIngedientModel.findByIdAndDelete(id);
        console.log('delete Menu Item Ingredient... ')
    }
    catch(err){
        res.status(400).json({ message: "menuItemIngredient not found" });
    }
}

