import React, { Component } from "react";

class ClassMouse extends Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0,
    };
  }
  componentDidMount() {
    console.log("didmount fn called");
    window.addEventListener("mousemove", this.logMousePosition);
  }
  componentWillUnmount() {
    console.log("unmouting class");
    window.removeEventListener("mousemove", this.logMousePosition);
  }
  logMousePosition = (e) => {
    console.log("log mouse fn called");
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };
  render() {
    return (
      <>
        Mouse X -{this.state.x} Y - {this.state.y}{" "}
      </>
    );
  }
}
export default ClassMouse;
