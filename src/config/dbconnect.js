import mongoose from "mongoose";

mongoose.connect(
    "mongodb+srv://user1:user123@cluster0.sqdblpx.mongodb.net/api-node"
);

let db = mongoose.connection;

export default db;
