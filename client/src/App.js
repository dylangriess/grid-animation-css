import "./App.css";

function App() {
  const wrapper = document.getElementById("tiles");

  let columns = 0;
  let rows = 0;

  const handleOnClick = (index) => {
    count = count + 1;

    anime({
      targets: ".tile",
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
