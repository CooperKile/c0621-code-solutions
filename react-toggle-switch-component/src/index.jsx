import React from 'react';
import ReactDOM from 'react-dom';

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }));
  }

  render() {
    if (this.state.isOn === false) {
      return (
      <div onClick={this.handleClick}>
        <div className="switch-off"></div>
        <div className="off"></div>
        <div className="state">Off</div>
      </div>
      );
    } else {
      return (
        <div onClick={this.handleClick}>
          <div className="switch-on"></div>
          <div className="on"></div>
          <div className="state">On</div>
        </div>
      );
    }
  }
}

ReactDOM.render(
  <Switch />,
  document.getElementById('root')
);
