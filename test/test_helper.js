// dependencies
const mongoose = require('mongoose');

// connect to mongodb
// will create user_test if db is not there.
mongoose.connect('mongodb://localhost/users_test');

//  
mongoose.connection
// event handelers
// once means watch for mongoose to omit an event called open
.once('open', () => console.log('db connection good to go!'))
// watch for mongoose to omit error
.on('error', (error) => {
    console.warn('Warning', error);
});