const express = require("express");
const connectDB = require("./db");

const app = express();
app.use(express.json());

connectDB();

const ordersRoute = require("./routes/ordersRoute");

app.use("/orders", ordersRoute);

const PORT = 5000 ;
const server = app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});