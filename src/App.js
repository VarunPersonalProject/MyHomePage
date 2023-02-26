import "./App.css";
import oBackground from "../src/data/background.json";
import Upper from "./components/main component/Upper";
import Middle from "./components/main component/Middle";
import Lower from "./components/main component/Lower";

function App() {
  const aBackground = oBackground["background"],
    nIdx =
      Number(new Date().toISOString().split("T")[0].replaceAll("-", "")) %
      aBackground.length,
    path = oBackground["path"],
    name = aBackground[nIdx],
    backgroundImg = `${path}${name}`;

  document.title = "My Home Page 🚞";

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        height: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="App"
    >
      <Upper />
      <Middle />
      <Lower />
    </div>
  );
}

export default App;
