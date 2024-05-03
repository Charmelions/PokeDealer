const API_URL = `https://pokeapi.co/api/v2/pokemon?limit=10`

const state = {
  pokemonList: [],
  currentPokemon: {},
};

const getPokemonList = async () => {
  try {
    const response = await fetch(API_URL);
    const json = await response.json();
    state.pokemonList = json.results;
    console.log(state.pokemonList);
  } catch (error) {
    console.log("Error occurred: ", error);
  }
};

getPokemonList();

const getPokemonDetails = async (pokemonUrl) => {
  try {
    const response = await fetch(pokemonUrl);
    const json = await response.json();
    state.currentPokemon = json;
    console.log(state.currentPokemon);
  } catch (error) {
    console.log("Error occurred while getting details: ", error);
  }
};

getPokemonDetails('https://pokeapi.co/api/v2/pokemon/1/');

module.exports = {
  getPokemonList,
  getPokemonDetails
}

// Problem: There are 2 API endpoints for fetching Pokemon.
// endpoint 1: https://pokeapi.co/api/v2/pokemon/{id or name}/
  // this fetches 1 specific pokemon and returns their entire object (with id, name, base_experience, height, etc... )
// endpoint 2: https://pokeapi.co/api/v2/pokemon?limit=151 (where 151 is the number of pokemon you'd like to fetch)
  // this fetches ALL pokemon but ONLY returns { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }

// Sticking point: I want ALL 151 Pokemon each with their ENTIRE objects (with id, name, base_experience, etc...)
  // Potential solutions:
    // A. Write a loop in the API call where the limit=i (inside the URL) where i increments up to 151
      // My loop is breaking on the first iteration - I only return the first Pokemon. Why? Does it have something to do with async or try/catch?
    // B. Maybe I should use Promise.all()
    // C. Should I be using state? const state = { pokemonList: [], currentPokemon: {}};

// const importAllPokemon = async () => {
//   for (let i = 1; i < 11; i++) {
//     try {
//       const response = await fetch(`${API_BASE_URL}pokemon/${i}`);
//       const jsonObject = await response.json();
//       const currentPokemon = jsonObject;
//       console.log(currentPokemon);
//       return currentPokemon;
//     } catch (err) {
//       console.log('ERROR occurred when fetching importAllPokemon')
//     }
//   }
// };

// importAllPokemon();