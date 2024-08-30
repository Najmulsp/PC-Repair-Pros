import connectDB from "@/lib/connectDB";

            // delete my bookings
export const DELETE = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection('bookings');

  try {
    console.log("Attempting to delete document with _id:", params.id);
    const res = await bookingsCollection.deleteOne({ _id:(params.id) });   
    return Response.json({ res });
  } catch (error) {
    return Response.json(error);
  }
};

            // get single booking for update
export const GET = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection('bookings');

  try {
    console.log("Attempting to find document with _id:", params.id);
    const res = await bookingsCollection.findOne({ _id:(params.id) });   
    return Response.json({ res });
  } catch (error) {
    return Response.json(error);
  }
};

              // update my bookings
export const PATCH = async (request, { params }) => {
  const updateDoc = await request.json();
  const db = await connectDB();
  const bookingsCollection = db.collection('bookings');

  try {
    console.log("Attempting to update document with _id:", params.id);
    const res = await bookingsCollection.updateOne({ _id:(params.id) }, {
      $set: {
        ...updateDoc
      }
    },
  {
    upsert: true
  });   
    return Response.json({ res });
  } catch (error) {
    return Response.json(error);
  }
};
