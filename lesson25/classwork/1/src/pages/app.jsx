import React from 'react';

import appStore from '../stores/appStore';
import * as appActions from '../actions/appActions';


class App extends React.Component{

    constructor(props) {
        super(props);
        
        this.state = {
            curr: appStore.getStyle()
        };

        this.handler = this.handler.bind(this)
    } 

    componentWillMount() {
        appStore.on('styleChange', () => {
            this.setState({ curr: appStore.getStyle() })
            }
        )
    }

    handler() {      
        appActions.setClass();
    }

    render() {
        return (
            <div>
                <p><button onClick={this.handler}>Set style</button></p>
                <div className={this.state.curr}></div>
            </div>
        )
    }
}

export default App;