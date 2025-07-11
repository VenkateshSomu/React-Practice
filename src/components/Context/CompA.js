import React, { Component } from "react";
import CompB from "./CompB";
import { UserProvider } from "./userContext";
class CompA extends Component {
  render() {
    return (
      <UserProvider value="Venkatesh Somu">
        <CompB />
      </UserProvider>
    );
  }
}
export default CompA;
