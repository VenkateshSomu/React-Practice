import React, { Component } from "react";

const withCounter = (OriginComponent, countValue) => {
  class NewComponent extends Component {
    constructor() {
      super();
      this.state = {
        count: 0,
      };
    }
    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + countValue };
      });
    };
    render() {
      console.log(this.props.name);
      return (
        <OriginComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};

export default withCounter;
