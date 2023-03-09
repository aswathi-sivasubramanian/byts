import React from "react";

export default class Task11 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      mark: "",
      roll: "",
      address: "",
      list: [],
      sroll: "",
      sname: "",
      smark: "",
      saddress: "",
      uname: "",
      umark: "",
      uaddress: "",
      uroll: "",
      toUpdate: "",
      toUpdateName: "",
      toUpdateMark: "",
      toUpdateAddress: "",
      dval: "",
    };
  }
  chname = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  chmark = (event) => {
    this.setState({
      mark: event.target.value,
    });
  };
  chroll = (event) => {
    this.setState({
      roll: event.target.value,
    });
  };
  chadd = (event) => {
    this.setState({
      address: event.target.value,
    });
  };
  create = (event) => {
    this.setState({
      list: [
        ...this.state.list,
        {
          name: this.state.name,
          mark: this.state.mark,
          roll: this.state.roll,
          address: this.state.address,
        },
      ],
    });
    event.preventDefault();
  };
  schange = (event) => {
    this.setState({
      sroll: event.target.value,
    });
  };
  uchange = (event) => {
    this.setState({
      uroll: event.target.value,
      toUpdate: "",
    });
  };
  chuname = (event) => {
    this.setState({
      uname: event.target.value,
    });
  };
  chumark = (event) => {
    this.setState({
      umark: event.target.value,
    });
  };
  chuaddress = (event) => {
    this.setState({
      uaddress: event.target.value,
    });
  };
  updateName = () => {
    var a = (
      <>
        <label>Enter Name</label>
        <input type="text" onChange={this.chuname} />
        <button onClick={this.updateNameList}>Submit</button>
      </>
    );
    this.setState({
      toUpdateName: a,
      toUpdateMark: "",
      toUpdateAddress: "",
    });
  };
  updateMark = () => {
    var a = (
      <>
        <label>Enter Mark</label>
        <input type="text" onChange={this.chumark} />
        <button onClick={this.updateMarkList}>Submit</button>
      </>
    );
    this.setState({
      toUpdateName: "",
      toUpdateMark: a,
      toUpdateAddress: "",
    });
  };
  updateAddress = () => {
    var a = (
      <>
        <label>Enter Address</label>
        <textarea type="text" onChange={this.chuaddress} />
        <button onClick={this.updateAddressList}>Submit</button>
      </>
    );
    this.setState({
      toUpdateName: "",
      toUpdateMark: "",
      toUpdateAddress: a,
    });
  };
  updateNameList = () => {
    console.log("From Name list");
    this.state.list.filter((l, index) => {
      var lists = [...this.state.list];
      if (l.roll === this.state.uroll) {
        lists[index].name = this.state.uname;
        this.setState({
          list: lists,
        });
      }
    });
  };
  updateMarkList = () => {
    console.log("From Mark list");
    this.state.list.filter((l, index) => {
      var lists = [...this.state.list];
      if (l.roll === this.state.uroll) {
        lists[index].mark = this.state.umark;
        this.setState({
          list: lists,
        });
      }
    });
  };
  updateAddressList = () => {
    console.log("From address list");
    this.state.list.filter((l, index) => {
      var lists = [...this.state.list];
      if (l.roll === this.state.uroll) {
        lists[index].address = this.state.uaddress;
        this.setState({
          list: lists,
        });
      }
    });
  };
  search = () => {
    this.state.list.filter((l) => {
      if (l.roll === this.state.sroll) {
        this.setState({
          smark: l.mark,
          sname: l.name,
          saddress: l.address,
        });
      }
    });
  };
  update = () => {
    var a = (
      <div>
        <p>Want to update</p>
        <button onClick={this.updateName}>Name</button>
        <button onClick={this.updateMark}>Mark</button>
        <button onClick={this.updateAddress}>Address</button>
      </div>
    );
    this.state.list.filter((l) => {
      if (l.roll === this.state.uroll) {
        this.setState({
          toUpdate: a,
        });
      }
    });
  };
  clear = () => {
    this.setState({
      name: "",
      mark: "",
      roll: "",
      address: "",
    });
  };
  dchange = (event) => {
    this.setState({
      dval: event.target.value,
    });
  };
  delete = () => {
    this.state.list.filter((l, index) => {
      var lists = [...this.state.list];
      if (l.roll === this.state.dval) {
        lists[index] = "";
        this.setState({
          list: lists,
        });
      }
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.create}>
          <div>
            <label>Name</label>
            <input
              type="text"
              id="name"
              value={this.state.name}
              onChange={this.chname}
            />
          </div>
          <div>
            <label>Mark</label>
            <input
              type="text"
              id="mark"
              value={this.state.mark}
              onChange={this.chmark}
            />
          </div>
          <div>
            <label>Roll no</label>
            <input
              type="text"
              id="roll"
              value={this.state.roll}
              onChange={this.chroll}
            />
          </div>
          <div>
            <label>Address</label>
            <textarea
              type="text"
              id="address"
              value={this.state.address}
              onChange={this.chadd}
            />
          </div>
          <input type="submit" value="Submit" />
          <button onClick={this.clear}>clear</button>
        </form>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Mark</th>
                <th>Rollno</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {this.state.list.map((l) => (
                <tr key={l.roll}>
                  <td>{l.name}</td>
                  <td>{l.mark}</td>
                  <td>{l.roll}</td>
                  <td>{l.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <label>Enter RollNo</label>
          <input type="text" onChange={this.schange} />
          <button onClick={this.search}>Search</button>
          <table>
            <tbody>
              <tr>
                <td>
                  <h3>{this.state.sname}</h3>
                </td>
                <td>
                  <h3>{this.state.smark}</h3>
                </td>
                <td>
                  <h3>{this.state.saddress}</h3>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h1>Update</h1>
          <label>Enter RollNo</label>
          <input type="text" onChange={this.uchange} />
          <button onClick={this.update}>Search</button>
          <div>{this.state.toUpdate}</div>
          <div>
            {this.state.toUpdateName}
            {this.state.toUpdateMark}
            {this.state.toUpdateAddress}
          </div>
        </div>
        <div>
          <h1>Delete</h1>
          <label>Enter RollNo</label>
          <input type="text" onChange={this.dchange} />
          <button onClick={this.delete}>Delete</button>
        </div>
      </>
    );
  }
}
