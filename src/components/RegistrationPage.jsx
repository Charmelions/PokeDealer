import { NavBar } from "./NavBar";

export function RegistrationPage () {
  return (
    <>
    <NavBar></NavBar>
    <div>
      <h1>PokéDealer</h1>
      <p id='welcomeText1'>An online store selling Pokémon.</p>
      <p id='welcomeText2'>Why catch 'em all, when you can just buy them all? A faster, better way to complete your PokéDex.</p>
    </div>

    <section class="sectionAtitleandtext">
      <h2 class='registerAndLoginHeadings'>Register for an Account</h2>
          <form id="formbox" class="sectionAtext">
            <label for="text" value="Your full name">full name:</label><br />
            <input type="text" id="userFName" value="Pika Chu" /><br /><br />

            <label for="userEmail" value="Email">email address:</label><br />
            <input type="email" id="userEmail" value="pikachu@gmail.com" /><br /><br />
  
            <label for="text" value="Your username">username:</label><br />
            <input type="text" id="userFName" value="pikachu123" /><br /><br />

            <label for="text" value="Your password">password:</label><br />
            <input type="password" id="userFName" value="pikachuisbest!" /><br /><br />

            <section id="submitbutton">
              <button type="submit" formaction="/profile/user_id">Register</button>
            </section>
          </form>
    </section>
    </>
  );
}