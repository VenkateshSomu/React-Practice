import React, { Component } from "react";

class User extends Component {
  render() {
    return <>{this.props.name(true)}</>;
  }
}

export default User;
