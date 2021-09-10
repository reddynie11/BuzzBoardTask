const orderModel = require("../model/Order");

exports.createOrder = async(req, res) => {
    try {
        const existing = await orderModel.findOne({ order_id: req.body.order_id});
        if(existing){
            res.status(400).json({ success: false, error: "duplicate order"});
        }
        const order = await orderModel.create(req.body);
        res.status(201).json({ success: true, data: order});
    } catch (error) {
        res.status(400).json({ success: false, error: error})
    }
};

exports.updateOrder = async(req, res) => {
    try {
        const updatedOrder = await orderModel.findOneAndUpdate({order_id: req.body.order_id}, req.body,{
            new: true,
            runValidators: true,
          });
        res.status(200).json({ success: true, data: updatedOrder});
    } catch (error) {
        res.status(400).json({ success: false, error: error});
    }
}

exports.getOrderByOrderId = async (req, res) => {
    try{
        const order = await orderModel.findOne({order_id: req.query.order_id});
        if(!order){
            res.status(404).json({ success: false, error: "order not found"});
        }
        res.status(200).json({success: true, data: order});
    }catch(error){
        res.status(400).json({ success: false, error: error});
    }
}

exports.getOrdersByDate = async (req, res) => {
    const date = new Date(req.query.date).toISOString();
    try {
        const list = await orderModel.find({ order_date: date});
        if(list.length == 0){
            res.status(404).json({ success: false, error: "orders not found"});
        }
        res.status(200).json({success: true, data: list});

    } catch (error) {
        res.status(400).json({ success: false, error: error});
    }
}

exports.deleteOrderByOrderId = async (req, res) => {
    try {
        const order = await orderModel.findOne({order_id: req.query.order_id});
        if(!order){
            res.status(404).json({ success: false, error: "order not found"});
        }
        order.remove();
        res.status(200).json({
            success: true,
            data: {},
            msg: `deleted order with order_id:${req.query.order_id}`,
          });
    } catch (error) {
        res.status(400).json({ success: false, error: error});
    }
}

