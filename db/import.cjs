const POKE_API_URL = `https://pokeapi.co/api/v2/pokemon`;
const EXTRAS_API_URL = `https://pokeapi.co/api/v2/pokemon-species`;
const prisma = require("../client.cjs");

const importAllPokemon = async () => {
  try {
    const pokemonList = [];
    const pokemonDetails = [];
    for (let i = 1; i < 4; i++) {
      const pokemonResponse = await fetch(`${POKE_API_URL}/${i}`);
      const pokemonObject = await pokemonResponse.json();
      const eachPokemon = pokemonObject;
      pokemonList.push(eachPokemon);

      const detailsResponse = await fetch(`${EXTRAS_API_URL}/${i}`);
      const detailsObject = await detailsResponse.json();
      const eachDetails = detailsObject;
      pokemonDetails.push(eachDetails);

      importPokemon(eachPokemon, eachDetails);
    }
  } catch (err) {
    console.log("ERROR2 occurred when fetching importAllPokemon", err);
  }
};

// const importStats = async (pokemon) => {
//   try {
//     const importedStats = await prisma.stats.create({
//       data: {
//         hp: pokemon.stats[0].base_stat,
//         attack: pokemon.stats[1].base_stat,
//         defense: pokemon.stats[2].base_stat,
//         speed: pokemon.stats[5].base_stat,
//       },
//     });

//     return importedStats;
//   } catch (err) {
//     console.log("Error importing stats", err);
//     throw err;
//   }
// };

// const importType = async (pokemon) => {
//   try {
//     const importedType = await prisma.types.create({
//       data: {
//         typeOne: pokemon.types[0].type.name,
//         typeTwo: pokemon.types[1].type.name,
//       },
//     });

//     return importedType;
//   } catch (err) {
//     console.log("Error importing type", err);
//     throw err;
//   }
// };

// const importSprites = async (pokemon) => {
//   try {
//     const importedSprites = await prisma.sprites.create({
//       data: {
//         dreamDefault: pokemon.sprites.other.dream_world.front_default,
//         homeDefault: pokemon.sprites.other.home.front_default,
//         homeShiny: pokemon.sprites.other.home.front_shiny,
//         officialDefault:
//           pokemon.sprites.other["official-artwork"].front_default,
//         officialShiny: pokemon.sprites.other["official-artwork"].front_shiny,
//       },
//     });

//     return importedSprites;
//   } catch (err) {
//     console.log("Error importing sprites", err);
//     throw err;
//   }
// };

// const importDescriptions = async (details) => {
//   try {
//     const importedDescriptions = await prisma.descriptions.create({
//       data: {
//         description: details.flavor_text_entries[0].flavor_text
//           .replace(/\n/g, " ")
//           .replace(/\f/g, " "),
//       },
//     });

//     return importedDescriptions;
//   } catch (err) {
//     console.log("Error importing descriptions", err);
//     throw err;
//   }
// };

const importPokemon = async (pokemon, details) => {
  try {
    let rarityValue = 0;
    if (details.capture_rate * 10 > 1000) {
      rarityValue = 1;
    } else if (details.capture_rate * 10 > 500) {
      rarityValue = 50;
    } else if (details.capture_rate * 10 > 150) {
      rarityValue = 150;
    } else if (details.capture_rate * 10 > 50) {
      rarityValue = 500;
    } else {
      rarityValue = 1000;
    }

    const importedPokemon = await prisma.pokemon.create({
      data: {
        pokemonId: pokemon.id,
        name: pokemon.name[0].toUpperCase() + pokemon.name.slice([1]),
        price: details.capture_rate * rarityValue,
        rarity: rarityValue,
        count: 99,
        statsId: {
          create: {
            hp: pokemon.stats[0].base_stat,
            attack: pokemon.stats[1].base_stat,
            defense: pokemon.stats[2].base_stat,
            speed: pokemon.stats[5].base_stat,
          },
        },
        typesId: {
          create: {
            typeOne: pokemon.types[0].type.name,
            typeTwo: pokemon.types[1].type.name,
          },
        },
        spritesId: {
          create: {
            dreamDefault: pokemon.sprites.other.dream_world.front_default,
            homeDefault: pokemon.sprites.other.home.front_default,
            homeShiny: pokemon.sprites.other.home.front_shiny,
            officialDefault:
              pokemon.sprites.other["official-artwork"].front_default,
            officialShiny:
              pokemon.sprites.other["official-artwork"].front_shiny,
          },
        },
        descriptionsId: {
          create: {
            description: details.flavor_text_entries[0].flavor_text
              .replace(/\n/g, " ")
              .replace(/\f/g, " "),
          },
        },
      },
    });

    return importedPokemon;
  } catch (err) {
    console.log("Error importing Pokemon", err);
    throw err;
  }
};

importAllPokemon();

module.exports = { importAllPokemon };
