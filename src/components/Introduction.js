import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import "../App.css";

function Introduction() {
  return (
    <div>
      <div>
        <CSSTransitionGroup transitionName="fade-1" transitionAppear={true} transitionEnter={false} transitionLeave={false}>
          <img src={require("../images/profile.jpg")} alt="Profile" className="App-logo" />
        </CSSTransitionGroup>
        <CSSTransitionGroup transitionName="fade-2" transitionAppear={true} transitionEnter={false} transitionLeave={false}>
          <h1>Pongnut Jittipanyakul</h1>
        </CSSTransitionGroup>
        <CSSTransitionGroup transitionName="fade-3" transitionAppear={true} transitionEnter={false} transitionLeave={false}>
          <p>Coming soon</p>
        </CSSTransitionGroup>
      </div>
      <CSSTransitionGroup transitionName="fade-4" transitionAppear={true} transitionEnter={false} transitionLeave={false}>
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
      </CSSTransitionGroup>
    </div>
  );
}

export default Introduction;
