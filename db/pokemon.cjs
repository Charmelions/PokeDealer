/* eslint-disable no-useless-catch */
const prisma = require("../client.cjs");

// Create

const createStats = async ({ hp, attack, defense, speed }) => {
  try {
    const newStats = await prisma.stats.create({
      data: { hp, attack, defense, speed },
    });

    return newStats;
  } catch (err) {
    console.log("Error creating stats", err);
    throw err;
  }
};

const createType = async ({ typeOne, typeTwo }) => {
  try {
    const newType = await prisma.types.create({
      data: { typeOne, typeTwo },
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

const createDescriptions = async ({ description }) => {
  try {
    const newDescription = await prisma.descriptions.create({
      data: {
        description,
      },
    });

    return newDescription;
  } catch (err) {
    console.log("Error creating descriptions", err);
    throw err;
  }
};

const createPokemon = async ({
  pokemonId,
  name,
  price,
  rarity,
  count,
  hp,
  attack,
  defense,
  speed,
  typeOne,
  typeTwo,
  dreamDefault,
  homeDefault,
  homeShiny,
  officialDefault,
  officialShiny,
  description,
}) => {
  try {
    const pokemon = await prisma.pokemon.create({
      data: {
        pokemonId,
        name,
        price,
        rarity,
        count,
        statsId: {
          create: {
            hp,
            attack,
            defense,
            speed,
          },
        },
        typesId: {
          create: {
            typeOne,
            typeTwo,
          },
        },
        spritesId: {
          create: {
            dreamDefault,
            homeDefault,
            homeShiny,
            officialDefault,
            officialShiny,
          },
        },
        descriptionsId: {
          create: {
            description,
          },
        },
      },
    });

    return pokemon;
  } catch (err) {
    console.log("Error creating Pokemon", err);
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
  descriptionsId
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
      },
    });

    return updatedPokemon;
  } catch (err) {
    throw err;
  }
};

const addSpritesToPokemon = async (
  pokemonId,
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
  createPokemon,
  getAllPokemon,
  getPokemonId,
  updatePokemon,
  addSpritesToPokemon,
  deletePokemon,
};
