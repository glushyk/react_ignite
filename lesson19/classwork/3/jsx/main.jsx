import React from 'react';
import ReactDOM from 'react-dom';
 
class Add extends React.Component {
  render() {
    return <h1>Result: {+this.props.val1 + +this.props.val2}</h1>
  }
}

ReactDOM.render(<Add val1='2' val2='4'/>, document.getElementById('container'));