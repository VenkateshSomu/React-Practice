import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("PURE  comp---Rendering");

    return (
      <>
        <div>Pure Component : Name is {this.props.name}</div>
      </>
    );
  }
}
export default PureComp;
