import React from "react";

import "./Coder.css";

export default function Coder() {
  return (
    <footer className="Coder">
      <p>
        <a
          href="https://github.com/HHJ121/weather-react-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by{" "}
        <a href="http://guidedbythe1.com/" target="_blank" rel="noreferrer">
          Haw-Harn Jiang
        </a>{" "}
        , hosted on{" "}
        <a
          href="https://cocky-elion-151f36.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </p>
    </footer>
  );
}
