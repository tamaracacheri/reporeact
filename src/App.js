import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
        <Routes>
          <Route path = "/" element = { <ItemListContainer title="Welcome to Great Buy Shop"/> } />
          <Route path = "/item/:id" element = { <ItemDetailContainer /> } />
          <Route path = "/category/:id" element = { <ItemDetailContainer /> } />
        </Routes>
    </div>
  );
}

export default App;