import { ProductCard } from "./ProductCard";

export function Home () {
  return (
    <>
    <div>
      <h1>PokéDealer</h1>
      <p id='welcomeText1'>An online store selling Pokémon.</p>
      <p id='welcomeText2'>Why catch 'em all, when you can just buy them all? A faster, better way to complete your PokéDex.</p>
    </div>

    <div id='productCardBox'>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    </div>
    
    <footer id="homeFooter">
      <a id ="backtotop" href="#top"><p>back to top</p></a>
    </footer>
    </>
  );
}

