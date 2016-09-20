import dispatcher from '../dispatcher';


let timerId;

function start() {
    timerId = setInterval(increment, 1000);
}

function stop() {
    clearInterval(timerId);
}

function increment() {
    dispatcher.dispatch({type: 'INCREMENT'})
}

function reset() {
    dispatcher.dispatch({type: 'RESET'})
}

export {increment, reset, start, stop};