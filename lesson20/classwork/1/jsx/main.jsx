import React from 'react';
import ReactDOM from 'react-dom';
 
class Parrent extends React.Component {
  render() {
    return <div>
    		<h1>{this.props.text}</h1>
    		<div>{this.props.children}</div>
    		</div>
  }
}

class Children extends React.Component {
  render() {
    return <h3>{this.props.text}</h3>
  }
}

ReactDOM.render(<Parrent text="hello from parrent"><Children text="hello from child"/></Parrent>, document.getElementById('container'));

