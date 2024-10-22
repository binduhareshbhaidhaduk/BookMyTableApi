import StaffModel from '../../model/Staff/staff.js'


export const addStaff = async (req, res) => {
    try {
        const { staff_first_name, staff_last_name, staffrole } = req.body;
        const staff = new StaffModel({
            staff_first_name,
            staff_last_name,
            staffrole
        });
        await staff.save();
        console.log('Staff added...');
        res.status(200).json(staff);
    } catch (error) {
        res.status(400).json({ message: 'Error adding staff', error: error.message });
    }
};

export const getAllStaff = async (req, res) => {
    try {
        const staffList = await StaffModel.find().populate('staffrole'); 
        console.log('Retrieved all staff...', staffList);
        res.status(200).json(staffList);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving staff', error: error.message });
    }
};


export const getStaffById = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id, 'staff id');
        const staff = await StaffModel.findById(id).populate('staffrole');
        console.log('Retrieved single staff...', staff);
        res.status(200).json(staff);
    } catch (error) {
        res.status(400).json({ message: 'Error retrieving staff', error: error.message });
    }
};


export const updateStaff = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        console.log(id, 'staff id');
        const updatedStaff = await StaffModel.findByIdAndUpdate(id, updateData, { new: true }).populate('staffrole');
        console.log('Staff updated...', updatedStaff);
        res.status(200).json(updatedStaff);
    } catch (error) {
        res.status(400).json({ message: 'Error updating staff', error: error.message });
    }
};

export const deleteStaff = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedStaff = await StaffModel.findByIdAndDelete(id);
        console.log('Staff updated...', deletedStaff);
        res.status(200).json(deletedStaff);
    } catch (error) {
        res.status(400).json({ message: 'Error updating staff', error: error.message });
    }
};

