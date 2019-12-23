import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import "./style.css";
import Header from "../Header";
// import Body from "../Body";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <div className="App-header-more">
          <CSSTransitionGroup transitionName="fade-scroll" transitionAppear={true} transitionEnter={false} transitionLeave={false}>
            <img src={require("../../assets/down512.svg")} alt="Scroll Down" className="App-header-more-logo" />
          </CSSTransitionGroup>
        </div>
      </header>
      <body className="App-body">{/* <Body /> */}</body>
    </div>
  );
}

export default App;
