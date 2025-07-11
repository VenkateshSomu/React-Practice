import React, { Component } from "react";

class Input extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }
  focusHandler = () => {
    this.inputRef.current.focus();
  };
  render() {
    return (
      <>
        <input type="text" ref={this.inputRef} />
        {/* <button onClick={this.focusHandler}>Focus</button> */}
      </>
    );
  }
}
export default Input;
