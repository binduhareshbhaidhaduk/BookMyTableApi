import { populate } from "dotenv";
import menuItemModel from "../../model/Menu/menuItem.js"

export const addMenuItem = async (req, res) => {
    try {
        const menuItem = new menuItemModel(req.body)
        await menuItem.save()
        console.log('add menu item...');
        res.status(201).json(menuItem)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getMenuItem = async (req, res) => {
    try {

        const menuItem = await menuItemModel.find().populate('menu')
        console.log('get all menu item...', menuItem);
        res.status(404).json(menuItem)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const singleMenuItemById = async (req, res) => {
    try {
        const menuItemId = req.params.id
        const menuItem = await menuItemModel.findById(menuItemId).populate('menu');
        console.log('get menu item by id...', menuItem);
        res.status(404).json(menuItem)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateMenuItem = async (req, res) => {
    try {
        const menuItemId = req.params.id;
        const updateData = req.body;
        console.log('id',menuItemId)
        const updateMenuItem = await menuItemModel.findByIdAndUpdate(menuItemId, updateData, { new: true }).populate('menu');
        console.log('update menu item...', updateMenuItem);
        res.status(200).json(updateMenuItem)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteMenuItem = async (req, res) => {
    try {
        const menuItemId = req.params.id
        const deleteMenuItem = await menuItemModel.findByIdAndDelete(menuItemId);
        console.log('delete menu item...', deleteMenuItem);
        res.status(404).json(deleteMenuItem)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

