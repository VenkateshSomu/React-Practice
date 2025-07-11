import React from "react";

const withCounter = (OriginalComponent) => {
  class WithCounter extends React.Component {
    constructor() {
      super();
      this.state = {
        count: 0,
      };
    }
    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };
    render() {
      return (
        <>
          <OriginalComponent
            name="Somu"
            count={this.state.count}
            incrementCount={this.incrementCount}
          />
        </>
      );
    }
  }
  return WithCounter;
};

export default withCounter;
