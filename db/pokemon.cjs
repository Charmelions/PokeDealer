/* eslint-disable no-useless-catch */
const prisma = require("../client.cjs");

// Create

const createStats = async ({ baseStat }) => {
  try {
    const newStats = await prisma.stats.create({
      data: { baseStat },
    });

    return newStats;
  } catch (err) {
    console.log("Error creating stats", err);
    throw err;
  }
};

const createType = async ({ typeName }) => {
  try {
    const newType = await prisma.types.create({
      data: { typeName },
    });

    return newType;
  } catch (err) {
    console.log("Error creating type", err);
    throw err;
  }
};

const createSprites = async ({
  dreamDefault,
  homeDefault,
  homeShiny,
  officialDefault,
  officialShiny,
}) => {
  try {
    const newSprites = await prisma.sprites.create({
      data: {
        dreamDefault,
        homeDefault,
        homeShiny,
        officialDefault,
        officialShiny,
      },
    });

    return newSprites;
  } catch (err) {
    console.log("Error creating sprites", err);
    throw err;
  }
};

const createDescriptions = async ({ descriptions }) => {
  try {
    const newType = await prisma.descriptions.create({
      data: { descriptions },
    });

    return newType;
  } catch (err) {
    console.log("Error creating descriptions", err);
    throw err;
  }
};

const createCategories = async ({ name, description }) => {
  try {
    const newType = await prisma.categories.create({
      data: { name, description },
    });

    return newType;
  } catch (err) {
    console.log("Error creating categories", err);
    throw err;
  }
};

const createPokemon = async ({
  pokemonId,
  name,
  price,
  rarity,
  count,
  statsId,
  typesId,
  spritesId,
  descriptionsId,
  categoriesId,
}) => {
  try {
    const pokemon = await prisma.pokemon.create({
      data: {
        pokemonId,
        name,
        price,
        rarity,
        count,
        statsId,
        typesId,
        spritesId,
        descriptionsId,
        categoriesId,
      },
    });

    return pokemon;
  } catch (err) {
    console.log("Error creating user", err);
    throw err;
  }
};

// Read/GET

const getAllPokemon = async () => {
  try {
    const pokemon = await prisma.pokemon.findMany();
    return pokemon;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getPokemonId = async (pokemonId) => {
  try {
    const pokemon = await prisma.tags.findUnique({
      where: {
        pokemonId,
      },
    });
    return pokemon;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// Update/PATCH

const updatePokemon = async (
  pokemonId,
  name,
  price,
  rarity,
  count,
  statsId,
  typesId,
  spritesId,
  descriptionsId,
  categoriesId
) => {
  try {
    const updatedPokemon = await prisma.pokemon.update({
      where: {
        pokemonId,
      },
      data: {
        name,
        price,
        rarity,
        count,
        statsId,
        typesId,
        spritesId,
        descriptionsId,
        categoriesId,
      },
    });

    return updatedPokemon;
  } catch (err) {
    throw err;
  }
};

const addSpritesToPokemon = async (
  pokemonId,
  spritesId,
  dreamDefault,
  homeDefault,
  homeShiny,
  officialDefault,
  officialShiny
) => {
  await prisma.pokemon.update({
    where: {
      pokemonId,
    },
    data: {
      spritesId: {
        create: [
          {
            sprites: {
              connectOrCreate: {
                create: {
                  dreamDefault,
                  homeDefault,
                  homeShiny,
                  officialDefault,
                  officialShiny,
                },
              },
            },
          },
        ],
      },
    },
  });
};

// "Delete"

const deletePokemon = async (pokemonId) => {
  try {
    await prisma.user.delete({
      where: {
        pokemonId,
      },
    });
  } catch (err) {
    console.log("Oops! Try that again.", err);
    throw err;
  }
};

module.exports = {
  createStats,
  createType,
  createSprites,
  createDescriptions,
  createCategories,
  createPokemon,
  getAllPokemon,
  getPokemonId,
  updatePokemon,
  addSpritesToPokemon,
  deletePokemon,
};
