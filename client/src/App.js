import "./App.css";
import anime from "animejs/lib/anime.es.js";

function App() {
  const wrapper = document.getElementById("tiles");

  let columns = 0;
  let rows = 0;

  let toggled = false;

  const handleOnClick = (index) => {
    toggled = !toggled;
    document.body.classList.toggle("toggled");

    const colors = [
      "rgb(229,57,53)",
      "rgb(253,216,53)",
      "rgb(244,81,30)",
      "rgb(76,175,80)",
      "rgb(33,150,243)",
      "rgb(156,39,176)",
    ];
    let count = -1;
    count = count + 1;

    anime({
      targets: ".tile",
      opacity: toggled ? 0 : 1,
      backgroundColor: colors[count % (colors.length - 1)],
      delay: anime.stagger(50, {
        grid: [columns, rows],
        from: index,
      }),
    });
  };
  const createTile = (index) => {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.onclick = (e) => handleOnClick(index);
    return tile;
  };

  const createTiles = (quantity) => {
    Array.from(Array(quantity)).map((tile, index) => {
      wrapper.appendChild(createTile(index));
    });
  };

  const createGrid = () => {
    wrapper.innerHTML = "";
    (columns = Math.floor(document.body.clientWidth / 50)),
      (rows = Math.floor(document.body.clientHeight / 50));

    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);
    createTiles(columns * rows);
  };

  window.onresize = () => createGrid();

  return <div className="App" id="tiles"></div>;
}

export default App;
