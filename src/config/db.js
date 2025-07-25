
const mongoose = require("mongoose");

const connectDB = async ()=> {

    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${connection.connection.host}`);
    } catch (error) {
        console.log(`Error in DB  : ${error.message}`);
        process.emit(1);
    }

};

module.exports = connectDB;