import "./App.css";
import { InfoCard } from "../infoCard/InfoCard";
import { Navbar } from "../navbar/Navbar";
import { HomePage } from "../../pages/homePage/HomePage";

function App() {
  return (
    <div className="App">
      <div className="left-sidebar">
        <InfoCard />
      </div>
      <div className="right-sidebar">
        <Navbar />
      </div>
      <HomePage />
    </div>
  );
}

export default App;
