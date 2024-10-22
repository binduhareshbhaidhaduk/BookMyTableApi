import express from  'express';
import { updateCustomer,getCustomerById ,getAllCustomers,addCustomer, deleteCustomer} from '../Controllers/Customer/customerController.js';
const customer =express.Router();

//add customer
customer.post ('/customer',addCustomer);
//get all customer
customer.get('/customer',getAllCustomers);
//single customer
customer.get('/customer/:id',getCustomerById );
//update customer
customer.put('/customer/:id',updateCustomer);
//delete customer
customer.delete('/customer/:id',deleteCustomer);


export default customer;