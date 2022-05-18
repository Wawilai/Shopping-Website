import Navbar from "./components/Navbar";
import Store from "./pages/Store";
// import Cart from "./components/Cart";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Cart /> */}
        <Routes>
          <Route path="/" element={<Store />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
