import "./App.css";
import { InfoCard } from "../infoCard/InfoCard";
import { Navbar } from "../navbar/Navbar";

function App() {
  return (
    <div className="App">
      <div className="left-sidebar">
        <InfoCard />
      </div>
      <div className="right-sidebar">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
