import './App.css';
import NavBar from './components/navbar/navbar';
import BasicList from './components/lista/lista';
import TitleComponent from './components/title/title';
import ItemListContainer from './components/navbar/ItemList/itemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BasicList/>
      <TitleComponent />
      <ItemListContainer />
    </div>
  );
}

export default App;