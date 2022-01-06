import "./App.css";
import Loader from "react-loader-spinner";

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="App-background">
        <Weather />
        <Loader
          type="BallTriangle"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    </div>
  );
}

export default App;
