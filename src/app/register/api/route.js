import { connectDB } from "@/app/mongodb/connectDB";

export const POST = async(request) =>{
    const newUser =await request.json();
    try {
        const db = await connectDB();
        const userCollection = db.collection("users");
        const exist = userCollection.findOne({email: newUser.email});
        if(exist){
            return Response.json({message: "User Already Exist"}, {status: 304});
        }
        const res = userCollection.insertOne(newUser);
        return Response.json({message: "User Created"}, {status: 200});
    } catch (error) {
        return Response.json({message: "Something Went Wrong"}, {status: 500});
    }
}