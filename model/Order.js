const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    order_id:{
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    item_name:{
        type: String,
        require: true
    },
    cost:{
        type: String,
        require: true
    },
    order_date: {
        type: Date,
        //default: new Date().toISOString().slice(0, 10),
    },
    delivery_date:{
        type: Date
    }
});

module.exports = mongoose.model("order", orderSchema);