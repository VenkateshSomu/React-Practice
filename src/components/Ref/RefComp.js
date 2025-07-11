import React, { Component } from "react";

class RefComp extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    this.inputRef.current.focus();
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }
  handleInputChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleInputChange}
          ref={this.inputRef}
        />
        <input type="text" ref={this.setCbRef} />
      </div>
    );
  }
}
export default RefComp;
