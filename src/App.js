import './App.css';
import NavBar from './components/navbar';
import BasicList from './components/lista';
import ItemListContainer from './components/itemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BasicList/>
      <ItemListContainer title="Bienvenidos a mi tienda" />
    </div>
  );
}

export default App;