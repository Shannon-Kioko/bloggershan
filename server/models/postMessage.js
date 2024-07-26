import mongoose, { Schema } from "mongoose"

// Mongoose is a MongoDB object data modelling (ODM) library for MongoDB and Node.js.
// It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

// Defining schema for our data
const postSchema = new Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: new Date()
    },
})

// Turning schema to model
const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;