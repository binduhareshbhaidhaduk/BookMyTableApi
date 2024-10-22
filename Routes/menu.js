import express from  'express';
import { addMenuItemIngredient, deleteMenuItemIngredient, getMenuItemIngredient, singleMenuItemIngredient, updateMenuItemIngredient } from '../Controllers/Menus/menuItemIngredientController.js';
import { addMenuItem, deleteMenuItem, getMenuItem, singleMenuItemById, updateMenuItem } from '../Controllers/Menus/menuItemController.js';
import { addMenu, deleteMenu, getAllMenu, singleMenu, updateMenu } from '../Controllers/Menus/menuController.js';
import { addOrderMenu, deleteOrderMenu, getOrderMenu, singleOrderMenu, upadteOrderMenu } from '../Controllers/Menus/orderMenuItemController.js';

const menu =express.Router();

//add menuItemIngredient
menu.post('/menuItemIngredient',addMenuItemIngredient);
//get all menuItemIngredient
menu.get('/menuItemIngredient',getMenuItemIngredient);
//single menuItemIngredient
menu.get('/menuItemIngredient/:_id',singleMenuItemIngredient);
// upadte menuItemIngredient
menu.put('/menuItemIngredient/:_id',updateMenuItemIngredient);
//delete menuItemIngredient
menu.delete('/menuItemIngredient/:_id',deleteMenuItemIngredient);


//add menu item
menu.post('/menuItem',addMenuItem);
//get all menu item
menu.get('/menuItem',getMenuItem);
//single  menu item
menu.get('/menuItem/:id',singleMenuItemById);
//update  menu item
menu.put('/menuItem/:id',updateMenuItem);
//delete menu item
menu.delete('menuItem/:id',deleteMenuItem);


//add menu
menu.post ('/menu',addMenu);
//get all menu
menu.get('/menu',getAllMenu);
//single menu
menu.get('/menu/:id',singleMenu);
//update mneu
menu.put('/menu/:id',updateMenu);
//delete menu
menu.delete('/menu/:id',deleteMenu);


//add order menu
menu.post('/orderMenu',addOrderMenu);
//get all order menu
menu.get('/orderMenu',getOrderMenu);
//single  order menu
menu.get('/orderMenu/:id',singleOrderMenu);
//update ordermenu
menu.get('/orderMenu/:id',upadteOrderMenu);
//delete ordere menu
menu.get('/orderMenu/:id',deleteOrderMenu);



export default menu;