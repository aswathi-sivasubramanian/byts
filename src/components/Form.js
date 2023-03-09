import React from "react";
class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      comm: "",
      job: "",
    };
  }
  chname = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  chcomm = (event) => {
    this.setState({
      comm: event.target.value,
    });
  };
  chjob = (event) => {
    this.setState({
      job: event.target.value,
    });
  };

  sub = (event) => {
    console.log(this.state.name);
    console.log(this.state.comm);
    console.log(this.state.job);
    event.PreventDefault();
  };
  render() {
    return (
      <form>
        <div>
          <label>name</label>
          <input type="text" value={this.state.name} onChange={this.chname} />
        </div>
        <div>
          <label>Comments</label>
          <textarea value={this.state.comm} onChange={this.chcomm}></textarea>
        </div>
        <div>
          <select value={this.state.job} onChange={this.chjob}>
            <option value="React">React</option>
            <option value="MongoDB">MongoDB</option>
            <option value="NOdejs">NOdejs</option>
          </select>
        </div>
        <button onSubmit={this.sub()}>Submit</button>
      </form>
    );
  }
}
export default Form;
