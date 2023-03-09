import React from "react";
class PropsClass extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hello, {this.props.name} {this.props.children}
        </h1>
      </div>
    );
  }
}
export default PropsClass;
