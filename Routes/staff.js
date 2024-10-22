import express from 'express';
import { addStaffRole, deleteStaffRole, getAllStaffRoles, getStaffRoleById, updateStaffRole } from'../Controllers/Staff/staffRoleController.js';
import { addStaff, deleteStaff, getAllStaff, getStaffById, updateStaff } from '../Controllers/Staff/staffController.js';

const staff = express.Router();

// Staff Role Routes
staff.post('/staff-role', addStaffRole);
staff.get('/staff-role', getAllStaffRoles);
staff.get('/staff-role/:id', getStaffRoleById);
staff.put('/staff-role/:id', updateStaffRole);
staff.delete('/staff-role/:id', deleteStaffRole);


// Staff Routes
staff.post('/staff', addStaff);
staff.get('/staff', getAllStaff);
staff.get('/staff/:id', getStaffById);
staff.put('/staff/:id', updateStaff);
staff.delete('/staff/:id', deleteStaff);


export default staff;
