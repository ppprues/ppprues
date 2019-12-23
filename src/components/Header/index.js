import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import "./style.css";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <CSSTransitionGroup transitionName="fade-profile" transitionAppear={true} transitionEnter={false} transitionLeave={false}>
          <img src={require("../../images/profile.jpg")} alt="Profile" className="Header-logo" />
        </CSSTransitionGroup>
        <CSSTransitionGroup transitionName="fade-name" transitionAppear={true} transitionEnter={false} transitionLeave={false}>
          <h1>Pongnut Jittipanyakul</h1>
        </CSSTransitionGroup>
        <CSSTransitionGroup transitionName="fade-username" transitionAppear={true} transitionEnter={false} transitionLeave={false}>
          <p>@PPPRUES</p>
        </CSSTransitionGroup>
        <CSSTransitionGroup transitionName="fade-social" transitionAppear={true} transitionEnter={false} transitionLeave={false}>
          <div className="Header-social-box">
            <div>
              <a href="https://facebook.com/ppprues/" target="_blank" rel="noopener noreferrer">
                <img src={require("../../assets/facebook512.svg")} alt="Facebook" />
              </a>
            </div>
            <div>
              <a href="https://github.com/ppprues/" target="_blank" rel="noopener noreferrer">
                <img src={require("../../assets/github512.svg")} alt="GitHub" />
              </a>
            </div>
            <div>
              <a href="https://instagram.com/ppprues/" target="_blank" rel="noopener noreferrer">
                <img src={require("../../assets/instagram512.svg")} alt="Instagram" />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/ppprues/" target="_blank" rel="noopener noreferrer">
                <img src={require("../../assets/linkedin512.svg")} alt="LinkedIn" />
              </a>
            </div>
            <div>
              <a href="mailto:p.jittipanyakul@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={require("../../assets/mail512.svg")} alt="Mail" />
              </a>
            </div>
          </div>
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default Header;
