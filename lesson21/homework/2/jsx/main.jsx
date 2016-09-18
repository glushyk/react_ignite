var React = require('react');
var ReactDOM = require('react-dom');

var Counter = React.createClass({

    getInitialState: function() {
        return {
            result: 0,
            val1: 0,
            val2: 0
        }
    },
    hendlerVal1: function(e) {
        this.setState({val1: e.target.value});
    },
    hendlerVal2: function(e) {
        this.setState({val2: e.target.value});
    },

    add: function() {
        this.setState({result: +this.state.val1 + +this.state.val2});
    },
    minus: function() {
        this.setState({result: +this.state.val1 - +this.state.val2});
    },
    division: function() {
        this.setState({result: +this.state.val1 / +this.state.val2});
    },
    mul: function() {
        this.setState({result: +this.state.val1 * +this.state.val2});
    },

    render: function() {
        return (
          <div>
            <input type="number" value={this.state.val1} onChange={this.hendlerVal1} placeholder="1"/>
            <input type="number" value={this.state.val2} onChange={this.hendlerVal2} placeholder="2"/>
            <button onClick={this.add}>+</button>
            <button onClick={this.minus}>-</button>            
            <button onClick={this.division}>/</button>
            <button onClick={this.mul}>*</button>
            <h1>Result: {this.state.result}</h1>
          </div>
        );
    }
});

ReactDOM.render(<Counter />, document.getElementById('container'));