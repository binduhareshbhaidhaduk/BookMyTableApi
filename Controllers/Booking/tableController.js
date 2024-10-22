import tableModel from '../../model/Booking/table.js';

export const addTable = async (req, res) => {
    try {
        const { table_number, table_details } = req.body;
        const table = new tableModel({
            table_number,
            table_details
        });
        await table.save();
        console.log('Table added...');
        res.status(200).json(table);
    } catch (error) {
        res.status(400).json({ message: 'Error adding table', error: error.message });
    }
};

export const getAllTables = async (req, res) => {
    try {
        const tables = await tableModel.find();
        console.log('Retrieved all tables...', tables);
        res.status(200).json(tables);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving tables', error: error.message });
    }
};

export const getTableById = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id, 'table id');
        const table = await tableModel.findById(id);
        console.log('Retrieved single table...', table);
        res.status(200).json(table);
    } catch (error) {
        res.status(400).json({ message: 'Error retrieving table', error: error.message });
    }
};

export const updateTable = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        console.log(id, 'table id');
        const updatedTable = await tableModel.findByIdAndUpdate(id, updateData, { new: true });
        console.log('Table updated...', updatedTable);
        res.status(200).json(updatedTable);
    } catch (error) {
        res.status(400).json({ message: 'Error updating table', error: error.message });
    }
};


