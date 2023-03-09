import React from "react";
class Inc5 extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  inc() {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  }

  incFive() {
    this.inc();
    this.inc();
    this.inc();
    this.inc();
    this.inc();
  }
  render() {
    return (
      <div>
        <h1>Count{this.state.count}</h1>
        <button onClick={() => this.incFive()}>increment</button>
      </div>
    );
  }
}
export default Inc5;
