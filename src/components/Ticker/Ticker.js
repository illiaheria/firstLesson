import React from "react";
import styles from "./Ticker.module.css";

class Ticker extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      seconds: 0,
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.seconds === 4) {
      this.props.hide();
    }
  }
  shouldComponentUpdate() {
    return true;
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  tick() {
    this.setState({ seconds: this.state.seconds + 1 });
  }
  render() {
    console.log(styles);
    return <div className={styles.title}>{this.state.seconds}</div>;
  }
}

export default Ticker;
