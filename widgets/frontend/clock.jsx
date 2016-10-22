import React from 'react';

class Clock extends React.Component {
  componentDidMount() {
    this.update = setInterval(() => {
      this.setState({time: new Date()});
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.update);
  }

  constructor() {
    super()
    this.state = {
      time: new Date()
    }
  }

  render() {
    return (
      <div className="clock">
        <div className="clock-header">
          <h2>Date:</h2>
          <h2>Time:</h2>
        </div>
        <div className="clock-body">
          <h2>{this.state.time.toDateString()}</h2>
          <h2>{this.state.time.toTimeString()}</h2>
        </div>
      </div>
    )
  }
}

export default Clock;
