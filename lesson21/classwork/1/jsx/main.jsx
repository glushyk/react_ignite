var React = require('react');
var ReactDOM = require('react-dom');


var Style = React.createClass({
    getInitialState: function() {
        return {
            color: '#ff0000'
        }
    },
    handler: function () {
        this.setState({color: (this.state.color == '#ff0000') ? '#000' : '#ff0000'});
    },
    render: function() {
        return (
            <div>
                <button onClick={this.handler}>Change</button>
                <div className="st" style={{backgroundColor: this.state.color}}></div>
            </div>
        );
    }
});

ReactDOM.render(<Style />, document.getElementById('container'));