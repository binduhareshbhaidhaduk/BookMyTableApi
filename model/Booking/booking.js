import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    table: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Table'
    },
    date_of_booking: {
        type: Date,
    },
    number_in_party: {
        type: Number,
    },
});

const bookingModel = mongoose.model('Booking', bookingSchema);

export default bookingModel;
