import dispatcher from '../dispatcher';

function Calc(data) {
    dispatcher.dispatch({type: 'CALC', data});
}

function changeValA(data) {
    dispatcher.dispatch({type: 'CHANGED_VALA', data});
}

function changeValB(data) {
    dispatcher.dispatch({type: 'CHANGED_VALB', data});
}

export {Calc, changeValA, changeValB};