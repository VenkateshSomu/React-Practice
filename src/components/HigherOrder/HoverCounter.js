import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
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
        <h1 onMouseOver={incrementCount}>
          {name} Mouse hovered {count} times
        </h1>
      </>
    );
  }
}
// export default HoverCounter;
export default withCounter(HoverCounter);
