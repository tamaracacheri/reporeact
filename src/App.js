import NavBar from "./components/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { CartProvider } from "./components/CartContext";
import Cart from "./components/Cart";

function App() {
  return (
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home title="Great Buy Shop" />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route
          path="/category/:category"
          element={<ItemListContainer title="Great Buy Shop" />}
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
  );
}

export default App;