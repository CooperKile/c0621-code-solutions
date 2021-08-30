import React from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timeElapsed: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.timeElapsed = setInterval(
      () => this.tick(this.timeElapsed++),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.tick);
  }

  tick() {
    this.setState({
      // timeElapsed
    });
  }

  handleClick() {
    this.setState({});
  }

  render() {
    return (
    <div className="container">
      <div className="circle">
          <div className="number">{this.timeElapsed}</div>
      </div>
      <i onClick={this.componentWillUnmount} className="fas fa-play"></i>
    </div>)
    ;
  }
}

ReactDOM.render(
  <Stopwatch />,
  document.querySelector('#root')
);
