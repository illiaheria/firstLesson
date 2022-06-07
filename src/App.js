import React from "react";
import Header from "./components/Header/Header";
import Ticker from "./components/Ticker/Ticker";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }
  hide = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <>
        <Header title="From second one" />
        <Ticker hide={this.hide} />
        {/* {/* <Header title="Hello team" /> */}
      </>
    );
  }
}

export default App;
