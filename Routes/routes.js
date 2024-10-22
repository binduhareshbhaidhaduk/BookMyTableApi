import express from  'express';
import ingredient from './ingredient.js';
import menu from './menu.js';
import customer from './customer.js';
import booking from './booking.js';
import table from './table.js';
import staff from './staff.js';
import order from './order.js';


const Routes=express.Router();

Routes.use('/',ingredient);
Routes.use('/',menu);
Routes.use('/',customer);
Routes.use('/',booking);
Routes.use('/',table)
Routes.use('/',staff);
Routes.use('/',order)



export default Routes;