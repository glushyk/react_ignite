import React from 'react';
import ReactDOM from 'react-dom';
 
var List = React.createClass({

  getInitialState: function() {
  	return {
  		input: undefined
  	}
  },

  hendler: function(e) {
  	this.setState({input: e.target.value});
  },

  render: function() {

    return <div>
    		    <input type="number" onChange={this.hendler} placeholder="Enter value here" />
    		    <Child itemNum={this.state.input}/>
    	     </div>
  }
})

var Child = React.createClass({
  getDefaultProps: function() {
    return {
      list: [{name:"Anne Montgomery",gender:"Female"},
              {name:"Annie George",gender:"Female"},
              {name:"Gary Butler",gender:"Male"},
              {name:"Lisa Mendoza",gender:"Female"},
              {name:"Marilyn Henry",gender:"Female"},
              {name:"Johnny Tucker",gender:"Male"},
              {name:"Chris Jacobs",gender:"Male"},
              {name:"Benjamin James",gender:"Male"}] 
    }
  },

  render: function() {
    var result = [];

    for(var i = 0; i < this.props.itemNum; i++) {
      if (this.props.itemNum > this.props.list.length) {
        return false;
      };
      result.push(<li>{this.props.list[i].name} {this.props.list[i].gender}</li>)
    }
    return <ul>{result}</ul>
  }
})

ReactDOM.render(<List/>, document.getElementById('container'));