import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/todos");
        console.log("DB Connected")
    } catch (error) {
        console.log("Error occurred");
        process.exit(1);
    }

}
