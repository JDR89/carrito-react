import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import CardListContainer from "./components/Cards/CardListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./components/CartContainer/CartContainer";
import { CartProvider } from "../src/Context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />

          <Routes>
            <Route path="/" element={<CardListContainer />} />
            <Route path="/productos" element={<CardListContainer />} />
            <Route
              path="/productos/:categoria"
              element={<CardListContainer />}
            />
            <Route
              path="/producto/:idProducto"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="*" element={<CardListContainer />} />
          </Routes>
        </div>
      </BrowserRouter>
     </CartProvider>
  );
}

export default App;
