


import mongoose from "mongoose";

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected to mongoDB");
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;



















// import { MongoClient, ServerApiVersion } from "mongodb";

// let db;
// export const connectDB = async () =>{
//     if(db) return db;
//     try {
//         const uri = process.env.MONGODB_URI
//         const client = new MongoClient(uri, {
//             serverApi: {
//                 version: ServerApiVersion.v1,
//                 strict: true,
//                 deprecationErrors: true,
//             },
//         });
//         db = client.db('PcRepairPros')
//         return db;
//     } catch (error) {
//         console.log(error)
//     }
// }