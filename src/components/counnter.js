import React from "react";
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  inc() {
    this.setState(function (prev) {
      console.log(prev.count);
      if (prev.count <= 15) {
        return (prev.count = prev.count + 1);
      } else {
        return prev.count;
      }
    });
  }
  dec() {
    this.setState(function (prev) {
      console.log(prev.count);
      if (prev.count > 0) return (prev.count = prev.count - 1);
      else {
        return (prev.count = 0);
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Count{this.state.count}</h1>
        <button onClick={() => this.inc()}>increment</button>
        <button onClick={() => this.dec()}> Decrement</button>
      </div>
    );
  }
}
export default Counter;
