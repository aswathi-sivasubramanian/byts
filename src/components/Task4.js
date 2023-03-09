import React from "react";
class Task4 extends React.Component {
  constructor() {
    super();
    this.state = {
      rupee: 0,
      dollar: 0,
      euro: 0,
    };
  }
  dollareurochange = (event) => {
    this.setState({
      dollar: event.target.value * 0.012,
      rupee: event.target.value,
      euro: event.target.value * 0.011,
    });
  };
  changerupeeeuro = (event) => {
    this.setState({
      dollar: event.target.value,
      rupee: event.target.value * 82.84,
      euro: event.target.value * 0.94,
    });
  };
  changedollarrupee = (event) => {
    this.setState({
      dollar: event.target.value * 1.07,
      rupee: event.target.value * 88.3,
      euro: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <label>INDIAN RUPEE :</label>
        <input
          type="number"
          value={this.state.rupee}
          onChange={this.dollareurochange}
        />
        <br />
        USD DOLLAR :{" "}
        <input
          type="number"
          value={this.state.dollar}
          onChange={this.changerupeeeuro}
        />
        <br />
        EURO :{" "}
        <input
          type="number"
          value={this.state.euro}
          onChange={this.changedollarrupee}
        />
      </div>
    );
  }
}
export default Task4;
