import './App.css';
import NavBar from './components/navbar';
import BasicList from './components/lista';
import { Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/itemListContainer'
import ItemDetailContainer from './components/itemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BasicList/>
      <Routes>
          <Route path = "/" element = { <ItemListContainer title="Bienvenidos a mi tienda" /> } />
          <Route path = "item/:id" element = { <ItemDetailContainer /> } />
          <Route path = "/category/:id" element = { <ItemListContainer /> } />
      </Routes>
    </div>
  );
}

export default App;