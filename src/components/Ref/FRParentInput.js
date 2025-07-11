import React, { Component } from "react";
import FRInput from "./FRInput";

class FRParentInput extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }
  handleFocus = () => {
    this.inputRef.current.focus();
  };
  render() {
    return (
      <>
        <FRInput ref={this.inputRef} />
        <button onClick={this.handleFocus}>Focus input</button>
      </>
    );
  }
}
export default FRParentInput;
