import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      buttonClicked: !prevState.isClicked
    }));
  }

  render() {
    return <button onClick={this.handleClick}>
      {this.state.buttonClicked ? 'Thanks!' : 'Click me!'}
    </button>;
  }
}

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);
