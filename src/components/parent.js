import React from "react";
import Child from "./child";
class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "parent",
    };
    this.welcome = this.welcome.bind(this);
  }
  welcome() {
    alert(`Hello${this.state.message}`);
  }
  render() {
    return <Child g={this.welcome} />;
  }
}
export default Parent;
