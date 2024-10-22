import customerModel from '../../model/Customer/customer.js';

export const addCustomer = async (req, res) => {
    const { customer_first_name, customer_last_name, phone_number, email_address,cellphone_number,other_customer_details } = req.body;

    try {
        const customer = new customerModel({
            customer_first_name,
            customer_last_name,
            phone_number,
            cellphone_number,
            email_address,
            other_customer_details,
        });

        await customer.save();
        console.log('Customer added...');
        res.status(201).json(customer);
    } catch (error) {
        res.status(400).json({ message: 'Error adding customer', error: error.message });
    }
};

export const getAllCustomers = async (req, res) => {
    try {
        const customers = await customerModel.find();
        console.log('Retrieved all customers...', customers);
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving customers', error: error.message });
    }
};

export const getCustomerById = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id, 'customer id');
        const customer = await customerModel.findById(id);
        console.log('Retrieved single customer...', customer);
        res.status(200).json(customer);
    } catch (error) {
        res.status(400).json({ message: 'Error retrieving customer', error: error.message });
    }
};

export const updateCustomer = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        console.log(id, 'customer id');
        const updatedCustomer = await customerModel.findByIdAndUpdate(id, updateData, { new: true });
        console.log('Customer updated...', updatedCustomer);
        res.status(200).json(updatedCustomer);
    } catch (error) {
        res.status(400).json({ message: 'Error updating customer', error: error.message });
    }
};

export const deleteCustomer = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id, 'customer id');
        const deletedCustomer = await customerModel.findByIdAndDelete(id);
        console.log('Customer deleted...', deletedCustomer);
        res.status(200).json(deletedCustomer);
    } catch (error) {
        res.status(400).json({ message: 'Error deleting customer', error: error.message });
    }
};
