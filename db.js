const mongoose = require("mongoose");

const connectDB = async () => {
    const uri = "mongodb://localhost:27017/buzzBoard";
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("MongoDB connecion established");
}

module.exports = connectDB;