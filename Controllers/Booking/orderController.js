import Order from '../../model/Booking/order.js';

// Add a new Order
export const addOrder = async (req, res) => {
    try {
        const { staff, table, order_date_time} = req.body;
        
        const order = new Order({
            staff,
            table,
            order_date_time
        });

        await order.save();
        console.log('Order added...', order);
        res.status(200).json(order);
    } catch (error) {
        res.status(400).json({ message: 'Error adding order', error: error.message });
    }
};

// Get all Orders
export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('staff').populate('table');
        console.log('Retrieved all orders...', orders);
        res.status(200).json(orders);
    } catch (error) {           
        console.log("err",error);
        
        res.status(500).json({ message: 'Error retrieving orders', error: error.message });
    }
};

// Get Order by ID
export const getOrderById = async (req, res) => {
    try {
        const id = req.params.id;
        const order = await Order.findById(id).populate('staff').populate('table');
        console.log('Retrieved single order...', order);
        res.status(200).json(order);
    } catch (error) {
        res.status(400).json({ message: 'Error retrieving order', error: error.message });
    }
};

// Update an Order
export const updateOrder = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        const updatedOrder = await Order.findByIdAndUpdate(id, updateData, { new: true }).populate('staff').populate('table');
        console.log('Order updated...', updatedOrder);
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(400).json({ message: 'Error updating order', error: error.message });
    }
};

// Delete an Order
export const deleteOrder = async (req, res) => {
    try {
        const id = req.params.id;
        await Order.findByIdAndDelete(id);
        console.log('Order deleted...');
        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting order', error: error.message });
    }
};
