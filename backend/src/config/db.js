import mongoose from 'mongoose'

export const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://kanaecoder_db_user:s8yzszH2G5QEp0Xf@cluster0.k99vbnc.mongodb.net/?appName=Cluster0")
        console.log("MONGODB CONNECTED SUCCESSFULLY!")
    } catch (error){
        console.error("Error connecting to MONGODB", error);
        process.exit(1)// exit with failure
        }
    
}