import React, { Component } from "react";

export default class Itemsinsertion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: 0,
      list: [],
    };
  }
  addft = () => {
    var date = new Date().toLocaleDateString();
    var time = new Date().toLocaleTimeString();
    this.state.item += 1;
    this.setState({
      list: [{ it: this.state.item, dt: date, t: time }, ...this.state.list],
    });
  };
  addlt = () => {
    var date = new Date().toLocaleDateString();
    var time = new Date().toLocaleTimeString();
    this.state.item += 1;
    this.setState({
      list: [...this.state.list, { it: this.state.item, dt: date, t: time }],
    });
  };
  render() {
    var a = this.state.list.map((x) => (
      <tr key={x.it}>
        <td>{x.it}</td>
        <td>
          <input id={x.it} type="text" />
        </td>
        <td>{x.dt}</td>
        <td>{x.t}</td>
      </tr>
    ));
    return (
      <div>
        <button onClick={this.addft}>ADD TO FIRST</button>
        <button onClick={this.addlt}>ADD TO LAST</button>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Value</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>{a}</tbody>
        </table>
      </div>
    );
  }
}
