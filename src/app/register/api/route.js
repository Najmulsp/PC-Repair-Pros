import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";


// export const POST = async(request) =>{
//     const newUser =await request.json();
//     try {
//         const db = await connectDB();
//         const userCollection = db.collection("users");
//         const exist = await userCollection.findOne({email: newUser.email});
//         if(exist){
//             return Response.json({message: "User Already Exist"}, {status: 304});
//         }
//         const hashedPassword = bcrypt.hashSync(newUser.password, salt);
//         const res = await userCollection.insertOne({...newUser, password: hashedPassword});
//         return Response.json({message: "User Created"}, {status: 200});
//     } catch (error) {
//         return Response.json({message: "Something Went Wrong"}, {status: 500});
//     }
// }
export const POST = async (request) => {
    const newUser = await request.json();
    try {
        const db = await connectDB();
        const userCollection = db.collection("users");
        const exist = await userCollection.findOne({ email: newUser.email });
        if (exist) {
            return new Response(JSON.stringify({ message: "User Already Exist" }), { status: 304 });
        }
        const hashedPassword = bcrypt.hashSync(newUser.password, 10);
        const res = await userCollection.insertOne({ ...newUser, password: hashedPassword });
        return new Response(JSON.stringify({ message: "User Created" }), { status: 200 });
    } catch (error) {
        console.error("Error creating user:", error);
        return new Response(JSON.stringify({ message: "Something Went Wrong", error: error.message }), { status: 500 });
    }
}