import mongoose, { Schema } from "mongoose";

const menuItemIngedientSchema = new Schema({
    quantity: {
        type: Number,
    }, 
    ingredient: {
        type: Schema.Types.ObjectId,
        ref: 'Ingredient',
    },
    menuItem: {
        type: Schema.Types.ObjectId,
        ref: 'menuItem',
    }
}) ;

const menuItemIngedientModel =mongoose.model('menuItemIngedient',menuItemIngedientSchema);

export default menuItemIngedientModel;