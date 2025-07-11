import React, { Component } from "react";

class ClassClick extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  handleClick = () => {
    console.log("class clicked");
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <>
        <div>
          Count: {this.state.count}
          <button onClick={this.handleClick}>Class click</button>
        </div>
      </>
    );
  }
}
export default ClassClick;
