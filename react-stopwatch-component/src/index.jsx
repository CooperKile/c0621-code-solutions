import React from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timeElapsed: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({});
  }

  render() {
    return (
      <div className="container">
        <div className="circle">
          <div className="number">0</div>
        </div>
        <i className="fas fa-play"></i>
      </div>
    );
  }
}

ReactDOM.render(
  Stopwatch,
  document.getElementById('root')
);
