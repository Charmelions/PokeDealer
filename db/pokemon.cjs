/* eslint-disable no-useless-catch */
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

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

const createSprites = async ({ frontDefault }) => {
    try {
      const newSprites = await prisma.sprites.create({
        data: { frontDefault },
      });
  
      return newSprites;
    } catch (err) {
      console.log("Error creating type", err);
      throw err;
    }
};

const createOGPokemon = async ({
  pokemonId, name, price, rarity, count, statsId, typesId, spritesId, descriptionsId, categoriesId
}) => {
  try 
    const ogPokemon = await prisma.pokemon.create({
      data: { pokemonId, name, price, rarity, count, statsId, typesId, spritesId, descriptionsId, categoriesId },
    });

    return ogPokemon;
  } catch (err) {
    console.log("Error creating user", err);
    throw err;
  }
};

// Read/GET

const getImages = async () => {
  try {
    const images = await prisma.images.findMany();
    return images;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getImageId = async (id) => {
  try {
    const image = await prisma.tags.findUnique({
      where: {
        id: id,
      },
    });
    return image;
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

// Update/PATCH

const updateImageTag = async (id, tagsId) => {
  try {
    const updatedTag = await prisma.images.update({
      where: {
        id,
      },
      data: {
        tagsId,
      },
    });

    return updatedTag;
  } catch (err) {
    throw err;
  }
};

const addTagToImage = async (id, tagText) => {
  await prisma.images.update({
    where: {
      id,
    },
    data: {
      tags: {
        create: [
          {
            tags: {
              connectOrCreate: {
                where: {
                  tagText,
                },
                create: {
                  tagText,
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

const deleteImageTag = async (id, tagText) => {
  try {
    const updatedImage = await prisma.images_tags.delete({
      where: {
        images: { id },
        tags: { tagText },
      },
    });

    return updatedImage;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  importImages,
  getImages,
  getImageId,
  updateImageTag,
  addTagToImage,
  deleteImageTag,
};
