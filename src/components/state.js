import React from "react";
class Wel extends React.Component {
  constructor() {
    super();
    this.state = { message: "Welcome", name: "John" };
  }
  change() {
    this.setState({ message: "thanks subs", name: "Jon" });
  }
  render() {
    return (
      <div>
        <h1>
          {this.state.message}
          {this.state.name}
        </h1>
        <button onClick={() => this.change()}>Subscribe</button>
      </div>
    );
  }
}
export default Wel;
