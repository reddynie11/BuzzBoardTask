const express = require("express");
const router = express.Router();

const { createOrder, updateOrder, getOrderByOrderId, deleteOrderByOrderId,getOrdersByDate } = require("../controller/orders");

router.route("/create").post(createOrder);

router.route("/update").put(updateOrder);

router.route("/search").get(getOrderByOrderId);

router.route("/list").get(getOrdersByDate);

router.route("/delete").delete(deleteOrderByOrderId);



module.exports = router;
