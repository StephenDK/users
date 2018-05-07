const mongoose = import('mongoose');

const Schema = mongoose.Schema

const PostSchema = new Schema({
    title: String
});

module.exports = PostSchema;