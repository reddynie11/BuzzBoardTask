const express = require("express");
const path = require("path");
const connectDB = require("./db");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

connectDB();

const ordersRoute = require("./routes/ordersRoute");

app.use("/orders", ordersRoute);

const PORT = 5000 ;
const server = app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});