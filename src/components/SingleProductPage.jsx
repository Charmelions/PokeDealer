export function SingleProductPage () {
  return (
    <>
    <div>
      <h1>PokéDealer</h1>
      <p id='welcomeText1'>An online store selling Pokémon.</p>
      <p id='welcomeText2'>Why catch 'em all, when you can just buy them all? A faster, better way to complete your PokéDex.</p>
    </div>

    <section id='detailedProductCardContainer'>
      <div id='detailedProductCard'>
        <div>
          <img id = 'pokemonImgUrl' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"/>
        </div>
        <div>
          <h2 id='pokemonName'>Bulbasaur</h2>
          <p id ='pokemonDetails'>$14.99 - Grass Type</p>
        </div>
      </div>
    </section>

    <section id='productDetailsContainer'>
      <div>
        <p class='moreProductDetailsText'>Base Stat: 318</p>
        <p class='moreProductDetailsText'>Description: A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.</p>
      </div>
      <div>
        <button id='addToCartButton'>Add to Cart</button>
      </div>
    </section>
    
    <footer id="homeFooter">
      <a id ="backtotop" href="#top"><p>back to top</p></a>
    </footer>
    </>
  );
}