import React, { Component } from "react";
import Input from "./Input";
class FocusInput extends Component {
  constructor(props) {
    super(props);

    this.compRef = React.createRef();
  }
  handleRef = () => {
    this.compRef.current.focusHandler();
  };
  render() {
    return (
      <>
        <Input ref={this.compRef} />
        <button onClick={this.handleRef}>Focus child input using ref</button>
      </>
    );
  }
}
export default FocusInput;
