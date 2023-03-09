import React, { Component } from "react";
export default class Task6 extends React.Component {
  constructor() {
    super();
    this.state = {
      opt1: "USD",
      opt2: "USD",
      val1: 0,
      val2: 0,
    };
  }
  change = (e) => {
    this.setState({
      opt1: e.target.value,
    });
  };
  change1 = (e) => {
    this.setState({
      opt2: e.target.value,
    });
  };
  chainp = (e) => {
    this.setState({
      val1: e.target.value,
    });
    console.log(this.state.opt1, this.state.opt2);
    if (this.state.opt1 == "USD" && this.state.opt2 == "Euro") {
      this.setState({ val2: e.target.value * 0.94 }, () =>
        console.log(this.state.val1)
      );
    } else if (this.state.opt1 == "USD" && this.state.opt2 == "IND") {
      this.setState({ val2: e.target.value * 82.74 }, () =>
        console.log(this.state.val1)
      );
    } else if (this.state.opt1 == "USD" && this.state.opt2 == "USD") {
      this.setState({ val2: e.target.value }, () =>
        console.log(this.state.val1)
      );
    } else if (this.state.opt1 == "IND" && this.state.opt2 == "Euro") {
      this.setState({ val2: e.target.value * 0.011 }, () =>
        console.log(this.state.val1)
      );
    } else if (this.state.opt1 == "IND" && this.state.opt2 == "USD") {
      this.setState({ val2: e.target.value * 0.012 }, () =>
        console.log(this.state.val1)
      );
    } else if (this.state.opt1 == "IND" && this.state.opt2 == "IND") {
      this.setState({ val2: e.target.value }, () =>
        console.log(this.state.val1)
      );
    } else if (this.state.opt1 == "Euro" && this.state.opt2 == "Euro") {
      this.setState({ val2: e.target.value }, () =>
        console.log(this.state.val1)
      );
    } else if (this.state.opt1 == "Euro" && this.state.opt2 == "IND") {
      this.setState({ val2: e.target.value * 87.66 }, () =>
        console.log(this.state.val1)
      );
    } else if (this.state.opt1 == "Euro" && this.state.opt2 == "USD") {
      this.setState({ val2: e.target.value * 1.06 }, () =>
        console.log(this.state.val1)
      );
    }
  };
  // dollareurochange=(event)=>
  // {
  //     this.setState({dollar:event.target.value*0.012,rupee:event.target.value,euro:event.target.value*0.011})
  // }
  // changerupeeeuro=(event)=>
  // {
  //     this.setState({dollar:event.target.value,rupee:event.target.value*82.84,euro:event.target.value*0.94})
  // }
  // changedollarrupee=(event)=>
  // {
  //     this.setState({dollar:event.target.value*1.07,rupee:event.target.value*88.30,euro:event.target.value})
  // }
  render() {
    return (
      <div>
        <select value={this.state.opt1} onChange={this.change}>
          <option value="USD">USD</option>
          <option value="Euro">Euro</option>
          <option value="IND">IND</option>
        </select>
        <input type="number" value={this.state.val1} onChange={this.chainp} />
        <select value={this.state.opt2} onChange={this.change1}>
          <option value="USD">USD</option>
          <option value="Euro">Euro</option>
          <option value="IND">IND</option>
        </select>
        <input type="number" value={this.state.val2} />
        {/* INDIAN RUPEE : <input type="number" value={this.state.rupee} 
            onChange={this.dollareurochange}/> 
            <br/>
            USD DOLLAR : <input type="number" value={this.state.dollar} onChange={this.changerupeeeuro}/>
            <br/>
            EURO : <input type="number" value={this.state.euro} onChange={this.changedollarrupee}/>
       */}
      </div>
    );
  }
}
