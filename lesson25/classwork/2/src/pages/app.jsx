import React from 'react';

import appStore from '../stores/appStore';
import * as appActions from '../actions/appActions';


class App extends React.Component{

    constructor(props) {
        super(props);
        
        this.state = {
            currCount: appStore.getCount()
        };

        this.handlerStart = this.handlerStart.bind(this);
        this.handlerStop = this.handlerStop.bind(this);
        this.handlerReset = this.handlerReset.bind(this);
    } 

    componentWillMount() {
        appStore.on('countChange', () => {
            this.setState({ currCount: appStore.getCount() });
            }
        )
    }

    handlerStart() {
        appActions.start();
    }
    handlerStop() {
        appActions.stop();
    }
    handlerReset() {
        appActions.reset();
    }

    render() {
        return (
            <div>
                <h1>{this.state.currCount}</h1>
                <button onClick={this.handlerStart}>Start</button>
                <button onClick={this.handlerStop}>Stop</button>
                <button onClick={this.handlerReset}>Reset</button>
            </div>
        )
    }
}


export default App;