import React from "react";
import { usersList } from "./mocks/itemsList";
import List from "./components/List/List";
import { ThemeContext, themes } from "./utils/ThemeContex";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: usersList,
      theme: themes.dark,
    };
  }
  handleDelete = (itemId) => {
    this.setState((state) => {
      return { items: state.items.filter((item) => item.id !== itemId) };
    });
  };

  toggleTheme = () => {};

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <div className="mainContainer">
          <List items={this.state.items} deleteHandler={this.handleDelete} />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
