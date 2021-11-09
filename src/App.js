import './App.css';
import NavBar from './components/navbar';
import ItemListContainer from './components/itemListContainer';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer title="Bienvenido a Great Buy Shop"/>
    </div>
  );
}

export default App;