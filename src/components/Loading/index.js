import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import "./style.css";

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }

  componentWillUnmount() {}

  render() {
    return (
      <div className="Loading">
        <CSSTransitionGroup transitionName="fade-loading" transitionAppear={false} transitionEnter={false} transitionLeave={true} transitionLeaveTimeout={10}>
          <img src={require("../../assets/down512.svg")} alt="Loading" className="Loading-logo" />
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default Loading;
