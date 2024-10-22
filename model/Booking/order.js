import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
  staff: {
    type: Schema.Types.ObjectId, 
    ref: 'staff',
  },
  table: {
    type: Schema.Types.ObjectId, 
    ref: 'Table',
  },
  order_date_time: {
    type: Date,
    default: Date.now 
  }
});

const OrderModel = mongoose.model('Order', orderSchema);

export default OrderModel;
