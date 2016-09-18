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
    componentDidMount: function() {
        setInterval(this.counting, 1000);
    },
    render: function() {
        return (
            <p>Current: {this.state.counter}</p>
        );
    }
});

ReactDOM.render(<Counter />, document.getElementById('container'));