import connectDB from "@/lib/connectDB"
import { NextResponse } from "next/server"


export const GET = async () => {
    const db = await connectDB()
    const servicesCollection = db.collection('services')

    try {
        const res = await servicesCollection.find().toArray()
        return NextResponse.json(res)
    }
    catch (error) {

        
        return NextResponse.json(error)
    }
}




// import connectDB from "@/lib/connectDB";

// export const GET = async () => {
//     console.log("API route hit");
//     const db = await connectDB();
//     console.log("Database connected");
    
//     // const serviceCollection = db.collection('services');
//     try {
//     const result = await serviceCollection.find().toArray();
//     console.log("Data fetched:", result);
//     return new Response(JSON.stringify(result));
//   } catch (error) {
//     console.log(error)
    
//   }
// };