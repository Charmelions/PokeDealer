import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home.jsx";
import { SingleProductPage } from "./components/SingleProductPage.jsx";
import { RegistrationPage } from "./components/RegistrationPage.jsx";
import { LoginPage } from "./components/LoginPage.jsx";

function App() {
  
  return (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product_id" element={<SingleProductPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage/>} />
    </Routes>
  </>
  );
}


export default App;
