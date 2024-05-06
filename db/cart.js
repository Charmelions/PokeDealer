/* eslint-disable no-useless-catch */
const prisma = require("../client.cjs");

// Create/POST

const createCart = async ({ cartId, count, pokemon }) => {
  try {
    const cartDB = await prisma.cart.create({
      data: { cartId, count, pokemon },
    });

    return cartDB;
  } catch (err) {
    console.log("Error creating Cart", err);
    throw err;
  }
};

// Read/GET

const getCartcartId = async (cartId) => {
  try {
    const cart = await prisma.cart.findUnique({
      where: {
        cartId,
      },
    });
    return cart;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// Update/PATCH

const updateCart = async (cartId, count, pokemon) => {
  try {
    const updatedCart = await prisma.cart.update({
      where: {
        cartId,
      },
      data: {
        count,
        pokemon,
      },
    });

    return updatedCart;
  } catch (err) {
    throw err;
  }
};

// Delete

const deleteCart = async (cartId) => {
  try {
    await prisma.cart.delete({
      where: {
        cartId: parseInt(cartId),
      },
    });
  } catch (err) {
    console.log("ERROR", err);
    throw err;
  }
};

module.exports = {
  createCart,
  getCartcartId,
  updateCart,
  deleteCart,
};
