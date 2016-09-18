var React = require('react');
var ReactDOM = require('react-dom');


var Counter = React.createClass({

    getInitialState: function() {
        return {
            counter: 0
        }
    },

    counting: function() {
        this.setState({counter: this.state.counter+1});
    },
    start: function() {
        this.timerId = setInterval(this.counting, 1000);
    },
    stop: function() {
        clearInterval(this.timerId);
    },
    reset: function() {
        this.setState({counter: 0});
    },

    render: function() {
        return (
          <div>
            <p>Current: {this.state.counter}</p>
            <button onClick={this.start}>Start</button>
            <button onClick={this.stop}>Stop</button>
            <button onClick={this.reset}>Reset</button>
          </div>
        );
    }
});

ReactDOM.render(<Counter />, document.getElementById('container'));