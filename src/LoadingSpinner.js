import React from "react";
import Loader from "react-loader-spinner";

export default function LoadingSpinner() {
  return (
    <div className="loader">
      <h2>Loading . . . </h2>
      <p>Getting the data ready...</p>
      <Loader
        type="Grid"
        color="rgb(245, 225, 225)"
        height={150}
        width={150}
        timeout={70000}
      />
    </div>
  );
}
