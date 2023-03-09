import React from "react";
class Bindjs extends React.Component {
  constructor() {
    super();
    // this.state={message:"Welcome",name:"guest"};
    // this.state={count:0};
    this.state = { message: "Welcome" };
    //this.click=this.click.bind(this)
  }
  inc() {
    // this.setState({count:this.state.count+1},()=>console.log(this.state.count));
    this.setState(
      (prev) => ({ count: prev.count + 1 }),
      console.log(this.state.count)
    );
  }
  change() {
    this.setState({ message: "thanks for subscribing", name: "nandita" });
  }
  incFive() {
    this.inc();
    this.inc();
    this.inc();
    this.inc();
    this.inc();
  }
  // click()
  // {
  //     //console.log("button is clicked")
  //     this.setState({message:"thankyou for subscribing"})
  // }
  click = () =>
    this.setState({
      message: "thankyou for subscribingkkkk",
      name: "ash",
    });
  render() {
    // return <div><h1>{this.state.message} {this.state.name}<br/>Count{this.state.count}</h1>
    // <button onClick={()=>this.incFive()}>increment</button>
    // <button onClick={()=>this.change()}>subscribe</button>
    // return <button onClick={this.click}>Click</button>
    return (
      <div>
        <h1>
          {this.state.message}
          {this.state.name}
        </h1>
        {/* <button onClick={this.click.bind(this)}>Click</button> */}
        {/* <button onClick={this.click}>Click</button> */}
        <button onClick={this.click}>Click</button>
      </div>
    );
  }
}
export default Bindjs;
