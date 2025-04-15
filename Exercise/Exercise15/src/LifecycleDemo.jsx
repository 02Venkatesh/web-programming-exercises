import React, { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log('Constructor: Component is created');
  }

  componentDidMount() {
    console.log('componentDidMount: Component has been mounted to the DOM');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('componentDidUpdate: Component updated');
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component is about to be removed');
  }

  handleIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    console.log('Render: Component rendering');
    return (
      <div style={{ border: '2px solid blue', padding: '10px', margin: '10px' }}>
        <h3>Lifecycle Demo</h3>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment Count</button>
      </div>
    );
  }
}

export default LifecycleDemo;
