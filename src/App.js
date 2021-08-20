import './App.css';
import Rive from "rive-react";

function App() {
  return (
    <div style={{height: "800px", width: "100%", backgroundColor: "#181818"}}>
      <Rive src="portfolioanimations.riv" artboard="LogoAnimation" animations="Entry" autoPlay/>
    </div>
  );
}

export default App;
