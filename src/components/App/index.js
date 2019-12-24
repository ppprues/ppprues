import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import "./style.css";
import Header from "../Header";
import Loading from "../Loading";
// import Body from "../Body";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.getLoading()
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: this.getData()
      });
    }, 5000);
  }

  render() {
    return <div>{this.state.data}</div>;
  }

  getData() {
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
        {/* <body className="App-body"><Body /></body> */}
      </div>
    );
  }

  getLoading() {
    return (
      <div className="App">
        <header className="App-header">
          <Loading />
        </header>
      </div>
    );
  }
}

export default App;
