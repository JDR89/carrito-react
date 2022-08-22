
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import CardList from "./components/Cards/CardList"

function App() {
  return (
    <div className="App">

      <div>
        <NavBar />
      </div>

      <div>
        <CardList  title={"Lo mas vendido"}/>
      </div>

    </div>
  );
}

export default App;
