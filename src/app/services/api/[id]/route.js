import connectDB from "@/lib/connectDB";


export const GET = async (request, {params}) => {
    const db = await connectDB()
    const servicesCollection = db.collection('services')

    try {
        const res = await servicesCollection.findOne({_id : params.id})
        return Response.json({res})
    }
    catch (error) {

        
        return Response.json(error)
    }
}