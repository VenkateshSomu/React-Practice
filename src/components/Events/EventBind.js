import React, { Component } from "react";

class EventBind extends Component {
  constructor() {
    super();
    this.state = {
      message: "hello",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    console.log("clickHandler");
    this.setState({
      message: "bye",
    });
  }
  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}
export default EventBind;
