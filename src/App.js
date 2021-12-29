import NavBar from "./components/navbar";
import ItemDetailContainer from "./components/itemDetailContainer";
import ItemListContainer from "./components/itemListContainer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { CartProvider } from "./components/CartContext";
import Cart from "./components/Cart";

function App() {
  return (
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home title="Pa'cagada" />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route
          path="/category/:category"
          element={<ItemListContainer title="Pa'cagada" />}
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
