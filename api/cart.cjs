const express = require("express");
const apiRouter = express.Router();

const {
  //   createCart,
  getCartId,
  //   updateCart,
  //   deleteCart,
} = require("../db/cart.cjs");

// Create

// Read

// Get a user's cart - PATH: /api/cart/:id
apiRouter.get("/:id", async (req, res) => {
  try {
    //get all the users
    const cartId = await getCartId();

    res.send(cartId);
  } catch (err) {
    res.sendStatus(500);
  }
});

// Update

// Delete

module.exports = apiRouter;
