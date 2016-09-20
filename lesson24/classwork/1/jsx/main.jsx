import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';

import View1 from './views/view1.jsx';
import View2 from './views/view2.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Link to="/view1"><button>View 1</button></Link>
                <Link to="/view2"><button>View 2</button></Link>
                <div>{this.props.children}</div>
            </div>
        )}
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <Route path="view1" component={View1} />
            <Route path="view2" component={View2} />
        </Route>
    </Router>, document.getElementById('main'));