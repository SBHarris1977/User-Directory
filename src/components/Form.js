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
    //  let value = event.target.value;
    //const date = event.target.date;
    const search = event.target.search;
    let { value, date } = event.target;
    if (date === "startDate") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [date]: value,
      [search]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    //event.preventDefault();
    {
    }
    this.setState({
      startDate: "",
      endDate: "",
      search: ""
    });
  };

  // onClick = () => {
  //   console.log(this.state);
  // };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div className="form-row">
        <form className="form">
          <label>DOB</label>
          <input
            type="text"
            placeholder="MM/DD/YYYY"
            onChange={e => this.handleInputChange(e)}
          />
          <input
            type="text"
            placeholder="MM/DD/YYYY"
            onChange={e => this.handleInputChange(e)}
          />
          <input
            type="text"
            placeholder="Search"
            ref={input => (this.search = input)}
            onChange={e => this.handleInputChange(e)}
          />
          <button onClick={e => this.handleFormSubmit(e)}>Search</button>
        </form>
      </div>
    );
  }
}

export default Form;
