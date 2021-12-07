import NavBar from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { CartProvider } from './components/CartContext';

function App() {
  
  return (
    <CartProvider>
      <NavBar/>
        <Routes>
          <Route path = "/" element = { <Home title = "Great Buy Shop"/> } />
          <Route path = "/item/:id" element = { <ItemDetailContainer /> } />
          <Route path = "/category/:category" element = { <ItemListContainer title = "Great Buy Shop" /> } />
        </Routes>
    </CartProvider>
  );
}

export default App;