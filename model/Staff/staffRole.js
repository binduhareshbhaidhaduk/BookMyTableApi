import mongoose from "mongoose";

const staffRoleSchema = new mongoose.Schema({
    staff_role_code: {
        type: String,
        unique: true
    },
    staff_role_description: {
        type: String,
    }
});

const StaffRole = mongoose.model('StaffRole', staffRoleSchema);

export default StaffRole;
