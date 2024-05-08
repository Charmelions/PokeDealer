export function ProductCard () {
  return (
    <>
      <a id='linkOnProductCard' href="/product_id">
        <div id='productCard'>
          <div>
            <img id='pokemonImgUrl' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"/>
          </div>
          <div>
            <h2 id='pokemonName'>Bulbasaur</h2>
            <p id='pokemonDetails'>$14.99 - Grass Type</p>
          </div>
        </div>
      </a>
    </>
  );
}