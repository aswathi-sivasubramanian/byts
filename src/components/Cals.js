import React, { Component } from "react";

class Cals extends Component {
  constructor() {
    super();
    this.state = {
      a: "",
      b: "",
      c: "",
    };
  }
  ab(event) {
    this.setState({
      a: this.state.a + event.target.value,
    });
  }
  ba = () => {
    this.setState(
      {
        a: eval(this.state.a),
      },
      console.log(this.state.a)
    );
  };
  ac = () => {
    this.setState({
      a: "",
    });
  };
  render() {
    return (
      <div>
        <table className="cal">
          <input value={this.state.a} readOnly></input>
          <tbody>
            <tr>
              <button onClick={this.ab.bind(this)} value={"7"}>
                7
              </button>
              <button onClick={this.ab.bind(this)} value={"8"}>
                8
              </button>
              <button onClick={this.ab.bind(this)} value={"9"}>
                9
              </button>
              <button onClick={this.ab.bind(this)} value={"+"}>
                +
              </button>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <button onClick={this.ab.bind(this)} value={"4"}>
                4
              </button>
              <button onClick={this.ab.bind(this)} value={"5"}>
                5
              </button>
              <button onClick={this.ab.bind(this)} value={"6"}>
                6
              </button>
              <button onClick={this.ab.bind(this)} value={"-"}>
                -
              </button>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <button onClick={this.ab.bind(this)} value={"1"}>
                1
              </button>
              <button onClick={this.ab.bind(this)} value={"2"}>
                2
              </button>
              <button onClick={this.ab.bind(this)} value={"3"}>
                3
              </button>
              <button onClick={this.ab.bind(this)} value={"*"}>
                X
              </button>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <button onClick={this.ac}>AC</button>
              <button onClick={this.ba}>=</button>
              <button onClick={this.ab.bind(this)} value={"0"}>
                0
              </button>
              <button onClick={this.ab.bind(this)} value={"/"}>
                /
              </button>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Cals;
