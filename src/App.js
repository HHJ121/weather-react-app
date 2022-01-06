import "./App.css";
import Loader from "react-loader-spinner";

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="App-background">
        <Weather />
        <Loader
          type="Puff"
          color="rgb(245, 225, 225)"
          height={100}
          width={100}
          timeout={7000}
        />
      </div>
    </div>
  );
}

export default App;
