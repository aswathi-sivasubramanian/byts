import React, { Component } from "react";

export default class Todo extends Component {
  constructor() {
    super();

    this.state = {
      first: "",
      ans: "",
      tot: "",
      data: [],
    };
  }

  cha = (event) => {
    this.setState({
      first: event.target.value,
    });
  };

  change = (event) => {
    this.setState({
      ans: this.state.first,
    });
  };
  submitForm = () => {
    let data = this.state;
  };
  handleSubmit = (event) => {
    this.setState({ data: [...this.state.data, this.data] });
    console.log(this.ans);
  };
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input placeholder="Add new" onChange={this.cha}></input>
        <button onClick={this.change}>Enter</button>
        <h1>{this.state.ans}</h1>
      </div>
    );
  }
}
