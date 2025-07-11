import React, { Component } from "react";
import withCounter from "./withCounter";
class ClickCounter extends Component {
  /* constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }; */
  render() {
    // const { count } = this.state;
    const { name, count, incrementCount } = this.props;
    return (
      <>
        <button onClick={incrementCount}>
          {name} clicked {count} times
        </button>
      </>
    );
  }
}
// export default ClickCounter;
export default withCounter(ClickCounter);
