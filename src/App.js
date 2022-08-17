
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import CardList from "./components/Cards/CardList"

function App() {
  return (
    <div className="App">

      <header>
        <NavBar />
      </header>

      <section>
        <CardList  title={"Lo mas vendido"}/>
      </section>

    </div>
  );
}

export default App;
