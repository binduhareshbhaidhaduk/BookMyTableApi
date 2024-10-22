import mongoose, { Schema } from "mongoose";

const menuSchema =new Schema({
    menu_name: String,
    menu_date:Date,
});

const menuModel = mongoose.model('menu',menuSchema);

export default menuModel;