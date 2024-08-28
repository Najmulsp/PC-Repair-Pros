import connectDB from "@/lib/connectDB";

export const POST = async (request) => {
    const bookings = request.json();
    const db = await connectDB()
    const bookingsCollection = db.collection('bookings')
    try {
        const res = await bookingsCollection.insertOne(bookings)
        return Response.json({message: "Service booked successfully"})
    }
    catch (error) {
        return Response.json(error)
    }
}