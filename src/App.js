
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar"
import CardListContainer from './components/Cards/CardListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<CardListContainer/>}/>
          <Route path='/productos' element={<CardListContainer/>}/>
          <Route path='/productos/:tipoProducto' element={<CardListContainer/>}/>
          <Route path='/producto/:idProducto' element={<ItemDetailContainer/>} />
          <Route path="*" element={<CardListContainer/>} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
