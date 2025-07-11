import React, { Component } from "react";

class ClassIntervalCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("did mount");
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    console.log("unmounting interval");
    clearInterval(this.interval);
  }

  tick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return <>Count: {this.state.count}</>;
  }
}
export default ClassIntervalCounter;
