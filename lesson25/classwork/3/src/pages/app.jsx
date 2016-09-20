import React from 'react';

import appStore from '../stores/appStore';
import * as appActions from '../actions/appActions';


class App extends React.Component{

    constructor(props) {
        super(props);
        
        this.state = {
            valA: appStore.getValA(),
            valB: appStore.getValB(),
            result: appStore.getResult()
        };

        this.handlerCalc = this.handlerCalc.bind(this);
        this.handlerValA = this.handlerValA.bind(this);
        this.handlerValB = this.handlerValB.bind(this);
    } 

    componentWillMount() {
        appStore.on('resultChanged', () => {
            this.setState({ result: appStore.getResult() });
            }
        );
        appStore.on('valAChanged', () => {
                this.setState({ valA: appStore.getValA() });
            }
        );
        appStore.on('valBChanged', () => {
                this.setState({ valB: appStore.getValB() });
            }
        )
    }

    handlerCalc(e) {
        if (e.target.tagName !== 'BUTTON') {
            return;
        }

        appActions.Calc(e.target.dataset.calcType);
    }

    handlerValA(e) {
        appActions.changeValA(e.target.value);
    }

    handlerValB(e) {
        appActions.changeValB(e.target.value);
    }

    render() {
        return (
            <div>
                <input type="number" onChange={this.handlerValA} />
                <input type="number" onChange={this.handlerValB} />
                <p onClick={this.handlerCalc}>
                    <button data-calc-type="sum">+</button>
                    <button data-calc-type="minus">-</button>
                    <button data-calc-type="mul">*</button>
                    <button data-calc-type="division">/</button>
                </p>
                <h1>{this.state.result}</h1>
            </div>
        )
    }
}

export default App;