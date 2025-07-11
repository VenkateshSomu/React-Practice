import React, { Component } from "react";
import ChildComp from "./ChildComp";

class ParentComp extends Component {
  constructor() {
    super();
    this.state = {
      message: "Parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childMsg) {
    alert(`Hello ${this.state.message} from ${childMsg}`);
  }
  render() {
    return (
      <>
        <ChildComp handleGreet={this.greetParent} />
      </>
    );
  }
}

export default ParentComp;
