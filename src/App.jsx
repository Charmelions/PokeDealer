import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home.jsx";

function App() {
  
  return (
  <>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/:product_id" element={<SingleProductPage />} />
  </Routes>
  </>
  );
}


export default App;
