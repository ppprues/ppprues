import React from "react";
import "../App.css";

function Introduction() {
  return (
    <div>
      <div>
        <img src={require("../images/profile.jpg")} alt="Profile" className="App-logo" />
        <h1>Pongnut Jittipanyakul</h1>
        <p>Coming soon</p>
      </div>
      <div className="App-social-box">
        <div>
          <a href="https://facebook.com/ppprues/" target="_blank" rel="noopener noreferrer">
            <img src={require("../assets/facebook512.svg")} alt="Facebook" className="App-social-logo" />
          </a>
        </div>
        <div>
          <a href="https://github.com/ppprues/" target="_blank" rel="noopener noreferrer">
            <img src={require("../assets/github512.svg")} alt="GitHub" className="App-social-logo" />
          </a>
        </div>
        <div>
          <a href="https://instagram.com/ppprues/" target="_blank" rel="noopener noreferrer">
            <img src={require("../assets/instagram512.svg")} alt="Instagram" className="App-social-logo" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/ppprues/" target="_blank" rel="noopener noreferrer">
            <img src={require("../assets/linkedin512.svg")} alt="LinkedIn" className="App-social-logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
