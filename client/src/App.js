import logo from "./logo.svg";
import "./App.css";

function App() {
  let columns = Math.floor(document.body.clientWidth / 50),
    rows = Math.floor(document.body.clientHeight / 50);

  const createTile = (index) => {
    const tile = document.createElement("div");

    tile.classList.add("tile");

    return tile;
  };
  return <div className="App"></div>;
}

export default App;
