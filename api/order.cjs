const express = require("express");
const apiRouter = express.Router();

const {
  // createUserViaCart,
  getOrder,
  getOrderId,
  // updateOrder,
  // deleteOrder,
} = require("../db/order.cjs");

// Create

// Read

// Get all orders - PATH: /api/orders/
apiRouter.get("/", async (req, res) => {
  try {
    //get all the orders
    const order = await getOrder();

    res.send(order.username);
  } catch (err) {
    res.sendStatus(500);
  }
});

// Get an order by id - PATH: /api/order/:id
apiRouter.get("/:id", async (req, res) => {
  try {
    //get all the users
    const orderId = await getOrderId();

    res.send(orderId);
  } catch (err) {
    res.sendStatus(500);
  }
});

// Update

// Delete

module.exports = apiRouter;
