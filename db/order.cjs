/* eslint-disable no-useless-catch */
const prisma = require("../client.cjs");

// Create/POST

const createOrder = async ({ userId, cartId }) => {
  try {
    const orderDB = await prisma.order.create({
      data: { userId, cartId },
    });

    return orderDB;
  } catch (err) {
    console.log("Error creating order", err);
    throw err;
  }
};

// Read/GET

const getOrder = async () => {
  try {
    const order = await prisma.order.findMany();
    return order;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getOrderId = async (orderId) => {
  try {
    const order = await prisma.order.findUnique({
      where: {
        orderId,
      },
    });
    return order;
  } catch (err) {
    throw err;
  }
};

// Update/PATCH

const updateOrder = async (orderId, cartId) => {
  try {
    const updatedorder = await prisma.order.update({
      where: {
        orderId,
      },
      data: {
        cartId,
      },
    });

    return updatedorder;
  } catch (err) {
    throw err;
  }
};

// Delete

const deleteOrder = async (orderId) => {
  try {
    await prisma.order.delete({
      where: {
        orderId: parseInt(orderId),
      },
    });
  } catch (err) {
    console.log("ERROR", err);
    throw err;
  }
};

module.exports = {
  createOrder,
  getOrder,
  getOrderId,
  updateOrder,
  deleteOrder,
};
