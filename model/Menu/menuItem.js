import mongoose, { Schema } from "mongoose";

const menuItemSchema = new Schema ({
    description: { type: String },
    price: { type: Number, required: true },
    menu:{
        type: Schema.Types.ObjectId,
        ref: 'menu',
    }
});

const menuItemModel = mongoose.model('menuItem',menuItemSchema);
export default menuItemModel;