const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = `mongodb+srv://${process.env.NEXT_PUBLIC_DB_USER}:${process.env.NEXT_PUBLIC_DB_PASS}@cluster0.r31xce1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

let db;
  const connectDB = async () => {


    if (db) {
        return db
    }

    try {

        const client = new MongoClient(process.env.MONGODB_URI, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        db = client.db('PcRepairPros')
        return db;
    }
    catch (error) {

        console.log(error);
    }



}

export default connectDB















// import mongoose from "mongoose";

// const connectDB = async() =>{
//     try {
//         await mongoose.connect(process.env.MONGODB_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             dbName: 'PcRepairPros',
//         });
//         console.log("connected to mongoDB");
//     } catch (error) {
//         console.log(error);
//     }
// };

// export default connectDB;






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