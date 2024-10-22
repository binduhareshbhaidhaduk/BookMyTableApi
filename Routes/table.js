import express from 'express';
import { addTable, getAllTables, getTableById, updateTable } from '../Controllers/Booking/tableController.js';

const table = express.Router();

// POST request to add a new table
table.post('/table', addTable);

// GET request to retrieve all tables
table.get('/table', getAllTables);

// GET request to retrieve a single table by ID
table.get('/table/:id', getTableById);

// PUT request to update a table by ID
table.put('/table/:id', updateTable);

export default table;
