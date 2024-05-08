const prisma = require("../client.cjs");
const bcrypt = require("bcrypt");
const { importAllPokemon } = require("./import.cjs");

const { createCart } = require("./cart.cjs");
const { createUserViaCart } = require("./order.cjs");
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

// pass seed creation
const addStats = async () => {
  console.log("Create stats");
  const stats1 = {
    hp: 10,
    attack: 20,
    defense: 30,
    speed: 40,
  };
  const stats2 = {
    hp: 90,
    attack: 80,
    defense: 70,
    speed: 60,
  };

  stats.push(await createStats(stats1));
  stats.push(await createStats(stats2));

  console.log("Stats create end");
};

// pass seed creation
const addType = async () => {
  console.log("Create type");
  const type1 = {
    typeOne: "poison",
    typeTwo: "grass",
  };
  const type2 = {
    typeOne: "water",
    typeTwo: "electric",
  };

  type.push(await createType(type1));
  type.push(await createType(type2));

  console.log("Type create end");
};

// pass seed creation
const addSprites = async () => {
  console.log("Create sprites");
  const sprites1 = {
    dreamDefault:
      "https://cdn.midjourney.com/48125363-d533-4a35-b942-c72a6c409b79/0_3.png",
    homeDefault:
      "https://cdn.midjourney.com/48125363-d533-4a35-b942-c72a6c409b79/0_2.png",
    homeShiny:
      "https://cdn.midjourney.com/48125363-d533-4a35-b942-c72a6c409b79/0_1.png",
    officialDefault:
      "https://cdn.midjourney.com/48125363-d533-4a35-b942-c72a6c409b79/0_0.png",
    officialShiny:
      "https://cdn.midjourney.com/642501fd-94c2-4145-b0c1-e160cae95e47/0_0.png",
  };

  sprites.push(await createSprites(sprites1));

  console.log("Sprites create end");
};

// pass seed creation
const addDescriptions = async () => {
  console.log("Create descriptions");
  const description1 = {
    description:
      "It occasionally uses an electric\nshock to recharge a fellow Pikachu\nthat is in a weakened state.",
  };
  const description2 = {
    description:
      "When several of\nthese POKéMON\ngather, their\felectricity could\nbuild and cause\nlightning storms.",
  };

  descriptions.push(await createDescriptions(description1));
  descriptions.push(await createDescriptions(description2));

  console.log("Descriptions create end");
};

// pass seed creation
const addPokemon = async () => {
  console.log("Create pokemon");
  const pokemon1 = {
    pokemonId: 200,
    name: "Shineysaur",
    price: 5000,
    rarity: 3000,
    count: 42,
    hp: 10,
    attack: 20,
    defense: 30,
    speed: 40,
    typeOne: "strawberry",
    typeTwo: "banana",
    dreamDefault:
      "https://cdn.midjourney.com/48125363-d533-4a35-b942-c72a6c409b79/0_3.png",
    homeDefault:
      "https://cdn.midjourney.com/48125363-d533-4a35-b942-c72a6c409b79/0_2.png",
    homeShiny:
      "https://cdn.midjourney.com/48125363-d533-4a35-b942-c72a6c409b79/0_1.png",
    officialDefault:
      "https://cdn.midjourney.com/48125363-d533-4a35-b942-c72a6c409b79/0_0.png",
    officialShiny:
      "https://cdn.midjourney.com/642501fd-94c2-4145-b0c1-e160cae95e47/0_0.png",
    description: "Yummy for breakfast!",
  };
  const pokemon2 = {
    pokemonId: 300,
    name: "Sparklesaur",
    price: 9000,
    rarity: 4000,
    count: 60,
    hp: 10,
    attack: 20,
    defense: 30,
    speed: 40,
    typeOne: "strawberry",
    typeTwo: "banana",
    dreamDefault:
      "https://cdn.midjourney.com/48125363-d533-4a35-b942-c72a6c409b79/0_3.png",
    homeDefault:
      "https://cdn.midjourney.com/48125363-d533-4a35-b942-c72a6c409b79/0_2.png",
    homeShiny:
      "https://cdn.midjourney.com/48125363-d533-4a35-b942-c72a6c409b79/0_1.png",
    officialDefault:
      "https://cdn.midjourney.com/48125363-d533-4a35-b942-c72a6c409b79/0_0.png",
    officialShiny:
      "https://cdn.midjourney.com/642501fd-94c2-4145-b0c1-e160cae95e47/0_0.png",
    description: "Yummy for breakfast!",
  };

  pokemon.push(await createPokemon(pokemon1));
  pokemon.push(await createPokemon(pokemon2));

  console.log("Pokemon create end");
};

// pass seed creation
const addCart = async () => {
  console.log("Create cart");
  const cart1 = {
    count: 2,
    pokemon: 10,
    user: 1,
  };
  const cart2 = {
    count: 1,
    pokemon: 25,
    user: 2,
  };

  cart.push(await createCart(cart1));
  cart.push(await createCart(cart2));

  console.log("Cart create end");
};

// pass seed creation
const addUser = async () => {
  console.log("Create user");
  const user1 = {
    firstAndLastName: "Anusha Awesomest",
    email: "anusha@charmelions.com",
    username: "anusha",
    password: await bcrypt.hash("swiper", 10),
    isAdmin: true,
  };
  const user2 = {
    firstAndLastName: "Char Bestest",
    email: "char@charmelions.com",
    username: "char",
    password: await bcrypt.hash("swipey", 10),
    isAdmin: false,
  };
  const user3 = {
    firstAndLastName: "Hannah Greatest",
    email: "hannah@charmelions.com",
    username: "hannah",
    password: await bcrypt.hash("sneaky", 10),
    isAdmin: false,
  };

  user.push(await createUser(user1));
  user.push(await createUser(user2));
  user.push(await createUser(user3));

  console.log("User create end");
};

//
const addOrder = async () => {
  console.log("Create order");
  const order1 = {
    firstAndLastName: "Char Bestest",
    email: "char@charfellows.com",
    username: "char2",
    password: await bcrypt.hash("swipey", 10),
    cartId: 1,
    count: 1,
    pokemon: 1,
    user: 1,
  };
  const order2 = {
    firstAndLastName: "Anusha Awesomest",
    email: "anusha@charfiends.com",
    username: "anusha2",
    password: await bcrypt.hash("swiper", 10),
    cartId: 2,
    count: 2,
    pokemon: 2,
    user: 2,
  };

  console.log(order1);
  console.log(order2);

  order.push(await createUserViaCart(order1));
  order.push(await createUserViaCart(order2));

  console.log("Order create end");
};

const seed = async () => {
  console.log("Planting seed...");

  await restart();
  await addStats();
  await addType();
  await addSprites();
  await addDescriptions();
  await addPokemon();
  await addCart();
  await addUser();
  await addOrder();

  console.log("Congratulations on the beautiful flowers!");
};

seed();
