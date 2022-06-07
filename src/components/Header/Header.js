import React from "react";
import styles from "./Header.module.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      user: "Illia",
      email: "il@gmail.com",
    };
    this.titleRef = React.createRef(); // {current: null}
  }
  increase = () => {
    // this.setState({ count: this.state.count + 1 });
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  };

  increaseTriple = () => {
    this.increase();
    this.increase();
    this.increase();
  };

  render() {
    console.log(this.titleRef);
    return (
      <h4 className={styles.title} ref={this.titleRef}>
        {this.props.title} {this.state.count}
        {/* <input value={this.state.user} onChange={} /> */}
        <button onClick={this.increaseTriple}>Click to increase</button>
      </h4>
    );
  }
}

export default Header;
