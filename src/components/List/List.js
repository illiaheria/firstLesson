import React from "react";
import { ThemeContext } from "../../utils/ThemeContex";
import styles from "./List.module.css";

class List extends React.Component {
  render() {
    console.log(this.context);
    return this.props.items.map((item) => (
      <ThemeContext.Consumer key={item.id}>
        {(theme) => (
          <div style={theme} className={styles.container} key={item.id}>
            <h5>{`${item.name} ${item.surname}`}</h5>
            <span>{item.mobile}</span>
            <hr />
            <button onClick={() => this.props.deleteHandler(item.id)}>
              Delete item
            </button>
          </div>
        )}
      </ThemeContext.Consumer>
    ));
  }
}

List.defaultProps = {
  items: [],
  deleteHandler: () => {},
};

List.contextType = ThemeContext;

export default List;
