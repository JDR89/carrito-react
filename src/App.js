
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CardListContainer from './components/Cards/CardListContainer';

function App() {
  return (
    <div className="App">

        <NavBar />

        <CardListContainer/>

        <ItemDetailContainer/>
    </div>
  );
}

export default App;
