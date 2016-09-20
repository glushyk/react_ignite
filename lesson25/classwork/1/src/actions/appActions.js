import dispatcher from '../dispatcher' 


export function setClass() {
    dispatcher.dispatch({ type: 'SET_CLASS'})
}