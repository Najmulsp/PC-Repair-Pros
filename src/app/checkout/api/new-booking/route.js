import connectDB from "@/lib/connectDB";

export const POST = async (request) => {
    console.log("request", request)
    const bookings = await request.json();
    const db = await connectDB()
    const bookingsCollection = db.collection('bookings')
    try {
        const res = await bookingsCollection.insertOne(bookings)
        return Response.json({message: "Service booked successfully"}, {status: 200})
    }
    catch (error) {
        return Response.json({message: "Something went wrong"}, {status: 400})
    }
}