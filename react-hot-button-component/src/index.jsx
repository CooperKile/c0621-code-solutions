import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickAmount: 0 };
    this.handleClick = this.handleClick.bind(this);
    // console.log(this.state);
  }

  handleClick() {
    this.setState({ clickAmount: this.state.clickAmount + 1 });
  }

  render() {

    if (this.state.clickAmount < 4) {
      return (<button onClick={this.handleClick} className={'hot-button cold'}>
      {'Hot Button'}
    </button>);
    } else if (this.state.clickAmount < 7) {
      return (<button onClick={this.handleClick} className={'hot-button cool'}>
        {'Hot Button'}
      </button>);
    } else if (this.state.clickAmount < 10) {
      return (<button onClick={this.handleClick} className={'hot-button tepid'}>
        {'Hot Button'}
      </button>);
    } else if (this.state.clickAmount < 13) {
      return (<button onClick={this.handleClick} className={'hot-button warm'}>
        {'Hot Button'}
      </button>);
    } else if (this.state.clickAmount < 16) {
      return (<button onClick={this.handleClick} className={'hot-button hot'}>
        {'Hot Button'}
      </button>);
    } else {
      return (<button onClick={this.handleClick} className={'hot-button nuclear'}>
        {'Hot Button'}
      </button>);
    }
  }
}

ReactDOM.render(
  <Button />,
  document.querySelector('#root')
);
