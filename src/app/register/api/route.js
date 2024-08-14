import connectDB  from "@/lib/connectDB";
import bcrypt from "bcrypt";

import User from '@/lib/UserModel';
// import { NextResponse } from "next/server";

// export async function POST(req) {
//     const {name, email, password} = await req.json();
//     await connectDB();
//     await User.create({name, email, password});
//     return NextResponse.json({message: "user created successfully"}, {status: 201})
    
// }


export const POST = async(request) =>{
    const newUser =await request.json();
    console.log(connectDB)
    try {
        const db = await connectDB();
        // const userCollection = db.collection("users");
        const exist = await User.findOne({email: newUser.email});
        if(exist){
            return Response.json({message: "User Already Exist"}, {status: 304});
        }
        const hashedPassword = bcrypt.hashSync(newUser.password, 8);
        const res = await User.create({...newUser, password: hashedPassword});
        return Response.json({message: "User Created"}, {status: 200});
    } catch (error) {
        console.log(error)
        return Response.json({message: "Something Went Wrong"}, {status: 500});
    }
}
// export const POST = async (request) => {
//     const newUser = await request.json();
//     try {
//         const db = await connectDB();
//         const userCollection = db.collection("users");
//         const exist = await userCollection.findOne({ email: newUser.email });
//         if (exist) {
//             return new Response(JSON.stringify({ message: "User Already Exist" }), { status: 304 });
//         }
//         const hashedPassword = bcrypt.hashSync(newUser.password, 10);
//         const res = await userCollection.insertOne({ ...newUser, password: hashedPassword });
//         return new Response(JSON.stringify({ message: "User Created" }), { status: 200 });
//     } catch (error) {
//         console.error("Error creating user:", error);
//         return new Response(JSON.stringify({ message: "Something Went Wrong", error: error.message }), { status: 500 });
//     }
// }