import express from 'express';
import { addBooking, getAllBookings, getBookingById, updateBooking } from '../Controllers/Booking/bookingController.js';

const booking = express.Router();

// POST request to add a new booking
booking.post('/booking', addBooking);

// GET request to retrieve all bookings
booking.get('/booking', getAllBookings);

// GET request to retrieve a single booking by ID
booking.get('/booking/:id', getBookingById);

// PUT request to update a booking by ID
booking.put('/booking/:id', updateBooking);


export default booking;
