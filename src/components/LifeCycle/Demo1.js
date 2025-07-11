import React, { Component } from "react";

class Demo1 extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    document.title = `You clicked ${this.state.count} times.`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times.`;
  }
  handleClick = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    return (
      <>
        <div>
          <button onClick={() => this.handleClick()}>
            Clicked count {this.state.count}
          </button>
        </div>
      </>
    );
  }
}
export default Demo1;
