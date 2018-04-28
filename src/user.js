import { model } from 'mongoose';

// Dependencies
const mongoose = require('mongoose');
// Setup a new schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String
});

// create user model
// mongo checks for a collection called 'user'
// 2nd argument passes in the new schem
// User represents the entire collection of data 
const User = mongoose.model('user', UserSchema);

// export the User model for use later in the application
module.exports = User;