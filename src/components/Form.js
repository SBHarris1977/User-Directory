//import React from "react";
import React, { Component } from "react";
//import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    startDate: "",
    endDate: "",
    search: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const date = event.target.date;

    if (date === "startDate") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [date]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    this.setState({
      startDate: "",
      endDate: "",
      search: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div className="form-row">
        <form className="form">
          <label>DOB</label>
          <input
            value={this.state.startDate}
            name="startDate"
            onChange={this.handleInputChange}
            type="text"
            placeholder="mm/dd/yyy"
          />
          <input
            value={this.state.endDate}
            name="endDate"
            onChange={this.handleInputChange}
            type="text"
            placeholder="mm/dd/yyy"
          />
          <input
            value={this.state.search}
            name="search"
            onChange={this.handleInputChange}
            type="text"
            placeholder="search"
          />
          <button onClick={this.handleFormSubmit}>Search</button>
        </form>
      </div>
    );
  }
}

export default Form;
