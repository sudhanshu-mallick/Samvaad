import "./App.css";
import DenseAppBar from "./Components/NavBar";
import PlaCard from "./Components/Card";
import SimpleTabs from "./Components/TabPanel";

function App() {
  return (
    <div className="App">
      <DenseAppBar />
      <SimpleTabs />
    </div>
  );
}

export default App;
