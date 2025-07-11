import React, { Component } from "react";

class RegComp extends Component {
  render() {
    console.log("REGULAR comp render");
    return (
      <>
        <div>Reg Component : Name is {this.props.name}</div>
      </>
    );
  }
}
export default RegComp;
