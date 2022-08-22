
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import CardList from "./components/Cards/CardList"

function App() {
  return (
    <div className="App">

        <NavBar />
        
        <CardList  title={"Lo mas vendido"}/>
      

    </div>
  );
}

export default App;
