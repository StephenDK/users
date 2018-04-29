// dependencies
const mongoose = require('mongoose');

// if you nned to use ES6 PROMISES
// mongoose.Promise = global.Promise;

before(() => {
    // connect to mongodb
    // will create user_test if db is not there.
    mongoose.connect('mongodb://localhost/users_test');  
    mongoose.connection
    // event handelers
    // once means watch for mongoose to omit an event called open
    .once('open', () => {})
    // watch for mongoose to omit error
    .on('error', (error) => {
        console.warn('Warning', error);
    });
})



beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
        // ready to run the next test 
        done();
    });
});