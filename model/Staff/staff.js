import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
    staff_first_name: {
        type: String,
        required: true
    },
    staff_last_name: {
        type: String,
    },
    staffrole: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'StaffRole', 
    }
});

const StaffModel = mongoose.model('staff', staffSchema);

export default StaffModel;
