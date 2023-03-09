import React from "react";
class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  inc() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => console.log(this.state.count)
    );
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
export default Welcome;
