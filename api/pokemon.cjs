const apiRouter = express.Router();

const {
  //   createStats,
  //   createType,
  //   createSprites,
  //   createDescriptions,
  //   createPokemon,
  getAllPokemon,
  getPokemonId,
  //   updatePokemon,
  //   addSpritesToPokemon,
  //   deletePokemon,
} = require("../db/pokemon.cjs");

// Create

// Read

// Get all pokemon - PATH: /api/pokemon/
apiRouter.get("/", async (req, res) => {
  try {
    //get all the pokemon
    const allPokemon = await getAllPokemon();

    res.send(allPokemon);
  } catch (err) {
    res.sendStatus(500);
  }
});

// Get an pokemon by id - PATH: /api/pokemon/:id
apiRouter.get("/:id", async (req, res) => {
  try {
    //get all the users
    const pokemonById = await getPokemonId();

    res.send(pokemonById);
  } catch (err) {
    res.sendStatus(500);
  }
});

// Update

// Delete

module.exports = apiRouter;
