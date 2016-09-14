import React from 'react';
import ReactDOM from 'react-dom';
 
class Style extends React.Component {

  propTypes: {
  	color: React.PropTypes.string,
  	text: React.PropTypes.string,
  	size: React.PropTypes.string
  }

  render() {
    return <p style={{ "color": this.props.color, "fontSize": this.props.size }}>{this.props.text}</p>
  }
}

ReactDOM.render(<Style color='red' size='32px' text='Some text here'/>, document.getElementById('container'));