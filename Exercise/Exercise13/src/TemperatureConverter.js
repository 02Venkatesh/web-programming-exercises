import React, { Component } from "react";
class TemperatureConverter extends Component {
  constructor(props) {
    super(props);
    this.state = { celsius: "", fahrenheit: "" };
  }
  convertToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
  convertToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
  handleCelsiusChange = (e) => {
    const celsius = e.target.value;
    this.setState({ celsius, fahrenheit: this.convertToFahrenheit(celsius) });
  };
  handleFahrenheitChange = (e) => {
    const fahrenheit = e.target.value;
    this.setState({ fahrenheit, celsius: this.convertToCelsius(fahrenheit) });
  };
  render() {
    return (
      <div>
        <p>Celsius</p>
        <input
          type="number"
          value={this.state.celsius}
          onChange={this.handleCelsiusChange}
          placeholder="Celsius"
        />
        <p>Fahrenheit</p>
        <input
          type="number"
          value={this.state.fahrenheit}
          onChange={this.handleFahrenheitChange}
          placeholder="Fahrenheit"
        />
      </div>
    );
  }
}
export default TemperatureConverter;
