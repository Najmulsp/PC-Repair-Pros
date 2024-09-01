import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    console.log("request", request)
    const bookings = await request.json();
    const db = await connectDB()
    const bookingsCollection = db.collection('bookings')
    try {
        const res = await bookingsCollection.insertOne(bookings)
        return NextResponse.json({message: "Service booked successfully"}, {status: 200})
    }
    catch (error) {
        return NextResponse.json({message: "Something went wrong"}, {status: 400})
    }
}