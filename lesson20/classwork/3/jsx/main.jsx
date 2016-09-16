import React from 'react';
import ReactDOM from 'react-dom';
 
var Style = React.createClass({

  getInitialState: function() {
  	return {
  		checked: true
  	}
  },

  hendler: function() {
  	this.setState({checked: !this.state.checked});
  },

  render: function() {

    return <div>
    		<label>Set style <input type="checkbox" defaultChecked ={this.state.checked} onChange={this.hendler}/></label>
    		<div style={this.state.checked ? this.props.style : {}}></div>
    	   </div>
  }
})

ReactDOM.render(<Style style={{width:'100px', height:'100px',borderRadius:'50%', backgroundColor:'red'}}/>, document.getElementById('container'));