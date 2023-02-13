import mongoose from "mongoose";

const connectDb = (url) => {
    mongoose.set('strictQuery', true);
    mongoose.connect(url).then(()=> console.log('Database connected')).catch((error) => console.error(error))
}

export default connectDb;