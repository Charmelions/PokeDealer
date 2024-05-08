/* eslint-disable no-useless-catch */
const prisma = require("../client.cjs");
const bcrypt = require("bcrypt");

// Create/POST

const createUserViaCart = async ({
  firstAndLastName,
  email,
  username,
  password,
  cartId,
  count,
  cart_pokemon,
  userId,
}) => {
  try {
    const plainTextPassword = password;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds);

    // table we are creating data in
    await prisma.user.create({
      data: {
        // data in the users table includes:
        firstAndLastName,
        email,
        username,
        password: hashedPassword,
        // the cart is its own table
        // so we can connect/create that from inside this user.create
        // with that, now we can create or connect to an existing cart
        cart: {
          create: [
            {
              // include all the data needed to create a new cart
              cart: {
                connectOrCreate: {
                  where: {
                    cartId,
                  },
                  create: {
                    count,
                    pokemon: cart_pokemon,
                    user: userId,
                  },
                },
              },
            },
          ],
        },
      },
    });
  } catch (err) {
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
    const updatedOrder = await prisma.order.update({
      where: {
        orderId,
      },
      data: {
        cartId,
      },
    });

    return updatedOrder;
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
  createUserViaCart,
  getOrder,
  getOrderId,
  updateOrder,
  deleteOrder,
};
