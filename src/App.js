import './App.css';
import NavBar from './components/navbar/navbar';
import ItemListContainer from './components/itemList/itemListContainer';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer title="Bienvenido a Great Buy Shop"/>
    </div>
  );
}

export default App;