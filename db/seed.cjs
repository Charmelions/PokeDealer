const prisma = require("../client.cjs");
const bcrypt = require("bcrypt");
const importAllPokemon = require("./import.cjs");

const { createCart } = require("./cart.cjs");
const { createOrder } = require("./order.cjs");
const {
  createStats,
  createType,
  createSprites,
  createDescriptions,
  createPokemon,
} = require("./pokemon.cjs");
const { createUser } = require("./users.cjs");

const cart = [];
const order = [];
const stats = [];
const type = [];
const sprites = [];
const descriptions = [];
const pokemon = [];
const user = [];

const restart = async () => {
  await prisma.stats.deleteMany({});
  await prisma.types.deleteMany({});
  await prisma.sprites.deleteMany({});
  await prisma.descriptions.deleteMany({});
  await prisma.pokemon.deleteMany({});
  await prisma.cart.deleteMany({});
  await prisma.order.deleteMany({});
  await prisma.user.deleteMany({});
  importAllPokemon();
};

const addCart = async () => {
  console.log("Create cart");
  const cart1 = {
    count: 2,
    pokemon: [1, 2, 3],
    user: 1,
  };
  const cart2 = {
    count: 1,
    pokemon: [4, 5],
    user: 2,
  };

  cart.push(await createCart(cart1));
  cart.push(await createCart(cart2));

  console.log("Cart create end");
};

const addUsers = async () => {
  console.log("FLIP THE SWITCH IGOR!");
  const user1 = {
    email: "bananapancakes@syrup.com",
    password: bcrypt.hashSync("bananas", 10),
  };
  const user2 = {
    email: "pumpkinpancakes@syrup.com",
    password: bcrypt.hashSync("pumpkins", 10),
  };

  users.push(await createUser(user1));
  users.push(await createUser(user2));

  console.log("IT LIVES!");
};

const addTags = async () => {
  const tag1 = {
    tagText: "gold",
  };
  const tag2 = {
    tagText: "gems",
  };
  const tag3 = {
    tagText: "jewels",
  };
  tags.push(await createTag(tag1));
  tags.push(await createTag(tag2));
  tags.push(await createTag(tag3));
};

const seed = async () => {
  console.log("WATERING SEED");

  await restart();
  await addUsers();
  await addTags();

  console.log("A FLOWER HAS BLOOMED");
};

seed();
