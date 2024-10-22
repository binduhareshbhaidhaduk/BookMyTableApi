import mongoose, { Schema } from "mongoose";

const orderMenuSchema = new Schema ({
    quantity:Number,
    commnets:String,
    menuItem:{
        type: Schema.Types.ObjectId,
        ref: 'menuItem',
    },
    order:{
        type: Schema.Types.ObjectId,
        ref: 'Order',
        }
});

const orderMenuModel = mongoose.model('orderMenu',orderMenuSchema);
export default orderMenuModel;