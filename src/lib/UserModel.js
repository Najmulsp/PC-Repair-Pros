import mongoose, {Schema} from "mongoose";

const userScema = new Schema(
    {
        name: String,
        email: String,
        password: String,
    }
);
const User = mongoose.models.User || mongoose.model("User", userScema)

export default User;