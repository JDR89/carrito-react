
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CardListContainer from './components/Cards/CardListContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          
        </Routes>
        <CardListContainer/>

        <ItemDetailContainer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
