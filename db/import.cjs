const API_URL = `https://pokeapi.co/api/v2/pokemon`

const importAllPokemon = async () => {
  try {
    const pokemonList = []
        for (let i = 1; i < 4; i++) {
          const response = await fetch(`${API_URL}/${i}`);
          const jsonObject = await response.json();
          const currentPokemon = jsonObject;
          pokemonList.push(currentPokemon);
        }
        return pokemonList;
    } catch (err) {
      console.log('ERROR2 occurred when fetching importAllPokemon', err)
    }
  };

module.exports = importAllPokemon