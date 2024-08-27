import connectDB from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export const GET = async (request, {params}) => {
    const db = await connectDB()
    const servicesCollection = db.collection('services')
    try {
        const res = await servicesCollection.findOne({ _id: new ObjectId(params.id) })
        console.log("paici",res)
        return Response.json({res})
    }
    catch (error) {

        
        return Response.json(error)
    }
}