import React, { Component } from "react";
import { UserConsumer } from "./userContext";

class CompC extends Component {
  render() {
    return (
      <UserConsumer>
        {(name) => {
          return <h2>{`Hi ${name}`}</h2>;
        }}
      </UserConsumer>
    );
  }
}
export default CompC;
