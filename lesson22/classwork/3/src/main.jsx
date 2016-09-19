var React = require('react');
var ReactDOM = require('react-dom');


class Pr extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {isShow: false};

        this.hendler = this.hendler.bind(this);
    }

    hendler() {
        this.setState({isShow: true});
    }

    render() {
        let result = '';

        if (this.state.isShow) {

            let keys = [];
            for (var key in this.props) keys.push(key);
            let propsList = keys.map((prop,id) => {
            	return <li key={id}>{prop}</li>
            });
            result = <ul>{propsList}</ul>;
        }

        return (
            <div>
                <button onClick={this.hendler}>Show</button>
                {result}
            </div>
        );
    }
}


ReactDOM.render(<Pr prop1="something" prop2="test" />, document.getElementById('result'));
