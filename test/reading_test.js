const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', () => {
    let joe;

    beforeEach((done) => {
        joe = new User({ name: 'Joe' });
        joe.save()
        .then(() => done());
    });

    it('finds all users with the name of joe', (done) => {
        User.find({ name: 'Joe' })
        .then((users) => {
            // console.log(users[0]._id);
            // console.log(joe._id);
            // to compare id's you must call toString() function because of ObjectId in mongo does not
            // return Raw string text.
            assert(users[0]._id.toString() === joe._id.toString());
            done();

        })
    })

    it('find a user with a particular id', (done) => {
        User.findOne({ _id: joe._id })
        .then((user) => {
            assert(user.name === "Joe");
            done();
        })
    })
})


// models come with two finds
// User.find(criteira) - find all users that match the give criteira. Returns an array;
// User.findOne(criteira) - find the first user that matches the criteira. Returns a single record;