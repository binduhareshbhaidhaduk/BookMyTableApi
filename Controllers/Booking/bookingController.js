import bookingModel from '../../model/Booking/booking.js';

export const addBooking = async (req, res) => {
    const { customer, table, date_of_booking, number_in_party } = req.body;

    try {
        const booking = new bookingModel({
            customer,
            table,
            date_of_booking,
            number_in_party,
        });

        await booking.save();
        console.log('Booking added...');
        res.status(201).json(booking);
    } catch (error) {
        res.status(400).json({ message: 'Error adding booking', error: error.message });
    }
};

export const getAllBookings = async (req, res) => {
    try {
        const bookings = await bookingModel.find().populate('table').populate('customer');  
        console.log('Retrieved all bookings...', bookings); 
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving bookings', error: error.message });
    }
};

export const getBookingById = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id, 'booking id');
        const booking = await bookingModel.findById(id).populate('customer').populate('table');  // Populate customer details
        console.log('Retrieved single booking...', booking);
        res.status(200).json(booking);
    } catch (error) {
        res.status(400).json({ message: 'Error retrieving booking', error: error.message });
    }
};

export const updateBooking = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        console.log(id, 'booking id');
        const updatedBooking = await bookingModel.findByIdAndUpdate(id, updateData, { new: true }).populate('customer').populate('table');
        console.log('Booking updated...', updatedBooking);
        res.status(200).json(updatedBooking);
    } catch (error) {
        res.status(400).json({ message: 'Error updating booking', error: error.message });
    }
};


