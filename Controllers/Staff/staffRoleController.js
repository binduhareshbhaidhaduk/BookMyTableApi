import StaffRoleModel from '../../model/Staff/staffRole.js'

export const addStaffRole = async (req, res) => {
    try {
        const { staff_role_code, staff_role_description } = req.body;
        const staffRole = new StaffRoleModel({
            staff_role_code,
            staff_role_description
        });
        await staffRole.save();
        console.log('Staff role added...');
        res.status(200).json(staffRole);
    } catch (error) {
        res.status(400).json({ message: 'Error adding staff role', error: error.message });
    }
};

export const getAllStaffRoles = async (req, res) => {
    try {
        const staffRoles = await StaffRoleModel.find();
        console.log('Retrieved all staff roles...', staffRoles);
        res.status(200).json(staffRoles);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving staff roles', error: error.message });
    }
};

export const getStaffRoleById = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id, 'staff role id');
        const staffRole = await StaffRoleModel.findById(id);
        console.log('Retrieved single staff role...', staffRole);
        res.status(200).json(staffRole);
    } catch (error) {
        res.status(400).json({ message: 'Error retrieving staff role', error: error.message });
    }
};

export const updateStaffRole = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        console.log(id, 'staff role id');
        const updatedStaffRole = await StaffRoleModel.findByIdAndUpdate(id, updateData, { new: true });
        console.log('Staff role updated...', updatedStaffRole);
        res.status(200).json(updatedStaffRole);
    } catch (error) {
        res.status(400).json({ message: 'Error updating staff role', error: error.message });
    }
};

export const deleteStaffRole = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteStaffRole = await StaffRoleModel.findByIdAndDelete(id);
        console.log('Staff role delete...', deleteStaffRole);
        res.status(200).json(deleteStaffRole);
    } catch (error) {
        res.status(400).json({ message: 'Error delete staff role', error: error.message });
    }
};
