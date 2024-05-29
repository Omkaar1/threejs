import Canvas from "./canvas/index";
import Home from "./pages/Home";
import Customizer from "./pages/Customizer";

function App() {
  return (
    <div className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
      {/* <h1 className="head-text">ThreeJS</h1> */}
    </div>
  );
}

export default App;
