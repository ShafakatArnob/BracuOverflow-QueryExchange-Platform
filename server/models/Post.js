import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    title: String,
    description: String,
    picturePath: String,
    userPicturePath: String,
    likes: {
        type: Map,
        of: Boolean,
    },
    disLikes: {
        type: Map,
        of: Boolean,
    },
    comments: {
        type: Array,
        default: [],
    },
    receivedReport: {
        type: Map,
        of: Boolean,
    },
}, { timestamps: true });


const Post = mongoose.model("Post", PostSchema);
export default Post;