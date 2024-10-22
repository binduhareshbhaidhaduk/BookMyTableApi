import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  customer_first_name: {
    type: String,
    required: true,
    trim: true
  },
  customer_last_name: {
    type: String,
    required: true,
    trim: true
  },
  customer_surname: {
    type: String,
  },
  phone_number: {
    type: String,
    required: true,
    unique: true,
    match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number']  // Example regex for a 10-digit number
  },
  cellphone_number: {
    type: String,
    match: [/^\d{10}$/, 'Please enter a valid 10-digit cellphone number']  // Optional field
  },
  email_address: {
    type: String,
    required: true,
    unique: true,
    match: [/.+\@.+\..+/, 'Please enter a valid email address']  // Basic email validation
  },
  other_customer_details: {
    type: String  
  },
});

const Customer = mongoose.model('Customer', customerSchema);

export default Customer;



  