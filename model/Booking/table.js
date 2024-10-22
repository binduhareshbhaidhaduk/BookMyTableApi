import mongoose from 'mongoose';

const tableSchema = new mongoose.Schema({
    table_number: {
        type: Number,
        unique: true 
    },
    table_details: {
        type: String,
    }
});

const tableModel = mongoose.model('Table', tableSchema);

export default tableModel;
 