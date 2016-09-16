import React from 'react';
import ReactDOM from 'react-dom';
 
class Add extends React.Component {

  propTypes: {
  	num1: React.PropTypes.number,
  	num2: React.PropTypes.number,
  	mode: React.PropTypes.bool
  }
  render() {
  	var number1, number2;
  	if (this.props.mode) {
  		number1 = this.props.num1;
  		number2 = this.props.num2;
  	} else {
  		number1 = this.props.num1.toString();
  		number2 = this.props.num2.toString();  		
  	}
    return <h1>{number1 + number2}</h1>
  }
}

ReactDOM.render(<Add num1={2} num2={4} mode={false}/>, document.getElementById('container'));