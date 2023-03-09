import React from "react";
class Task9 extends React.Component {
  constructor() {
    super();
    this.state = {
      nm: "",
      ag: "",
      rn: "",
      inp: "",
      ans: "",
      count: 0,
      a: [{ name: "", age: "", rollno: "" }],
    };
  }
  change1 = (e) => {
    this.setState({
      nm: e.target.value,
    });
  };
  change2 = (e) => {
    this.setState({
      ag: e.target.value,
    });
  };
  change3 = (e) => {
    this.setState({
      rn: e.target.value,
    });
  };
  change4 = (e) => {
    this.setState({
      inp: e.target.value,
    });
  };
  click = () => {
    this.setState(
      {
        a: [
          { name: this.state.nm, age: this.state.ag, rollno: this.state.rn },
          ...this.state.a,
        ],
      },
      console.log(this.state.nm + " " + this.state.ag + " " + this.state.rn)
    );
    this.setState({ nm: "" });
    this.setState({ ag: "" });
    this.setState({ rn: "" });
    this.setState({
      count: this.state.count + 1,
    });
  };
  click1 = () => {
    this.setState({
      a: [{ name: "", age: "", rollno: "" }],
    });
  };
  click2 = () => {
    for (var i = 0; i <= this.state.count; i++) {
      if (this.state.inp === this.state.a[i].rollno) {
        this.setState({
          ans: this.state.a[i].age,
        });
      }
    }
  };
  render() {
    const b = this.state.a.map((x) => (
      <tr>
        <td>{x.name}</td>
        <td>{x.age} </td>
        <td>{x.rollno}</td>
      </tr>
    ));
    return (
      <>
        <label htmlfor="name">Name</label>
        <input type="text" value={this.state.nm} onChange={this.change1} />
        <label htmlfor="age">Age</label>
        <input type="text" value={this.state.ag} onChange={this.change2} />
        <label htmlfor="rollno">Rollno</label>
        <input type="text" value={this.state.rn} onChange={this.change3} />
        <button type="submit" onClick={this.click}>
          Submit
        </button>
        <button type="submit" onClick={this.click1}>
          Clear
        </button>
        {/* {this.state.a} */}

        <table className="table-stripped">
          <thead>
            <td>Name</td>
            <td>Age</td>
            <td>Rollno</td>
          </thead>
          {/* <tbody> */}
          {b}
          {/* </tbody> */}
        </table>
        <label htmlfor="search">Enter rollno</label>
        <input type="text" value={this.state.inp} onChange={this.change4} />
        <button type="submit" onClick={this.click2}>
          Search
        </button>
        <h5>The age is</h5>
        {this.state.ans}
      </>
    );
  }
}
export default Task9;
