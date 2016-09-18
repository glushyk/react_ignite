var React = require('react');
var ReactDOM = require('react-dom');

var Counter = React.createClass({

    getInitialState: function() {
        return {
            counter: 0
        }
    },

    inc: function() {
        this.setState({counter: this.state.counter+1});
    },
    dec: function() {
        this.setState({counter: this.state.counter-1});
    },

    render: function() {
        return (
          <div>
            <h1>Current: {this.state.counter}</h1>
            <button onClick={this.inc}>+</button>
            <button onClick={this.dec}>-</button>
          </div>
        );
    }
});

ReactDOM.render(<Counter />, document.getElementById('container'));