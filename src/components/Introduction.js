import React from "react";
import "../App.css";

function Introduction() {
  return (
    <div>
      <img src={require("../images/profile.jpg")} alt="Profile" className="App-logo" />
      <h1>Pongnut Jittipanyakul</h1>
      <p>Coming soon</p>
    </div>
  );
}

export default Introduction;
