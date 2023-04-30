const { default: mongoose } = require("mongoose")
const dotenv = require("dotenv");

dotenv.config();
const dbConnect = () =>{
    try{
        const conn=mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connected successfully");
    }
    catch (error){
        console.log("Database error");
    }
};
module.exports = dbConnect;