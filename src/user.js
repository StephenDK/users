
// Dependencies
const mongoose = require('mongoose');
// Setup a new schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        validate: {
            // The validator is where you write the function
            // and message is what the user gets if false
            validator: (name) => name.length > 2,
            message: 'Name must be longer than 2 characters.'
        },
        required: [true, 'Name is required.']
    },
    postCount: Number
});

// create user model
// mongo checks for a collection called 'user'
// 2nd argument passes in the new schem
// User represents the entire collection of data 
const User = mongoose.model('user', UserSchema);

// export the User model for use later in the application
module.exports = User;