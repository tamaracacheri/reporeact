import NavBar from './components/navbar';
import ItemListContainer from './components/itemListContainer';
import { Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
        <Routes>
          <Route path = "/" element = { <ItemListContainer title="Welcome to Great Buy Shop"/> } />
          <Route path = "item/:id" element = { <ItemDetailContainer /> } />
        </Routes>
    </div>
  );
}

export default App;