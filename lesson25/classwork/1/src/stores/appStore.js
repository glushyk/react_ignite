import { EventEmitter } from 'events' 
import dispatcher from '../dispatcher'


class AppStore extends EventEmitter {
    constructor() {
        super() 
        this.curr = 'red';
    } 

    getStyle() {
        return this.curr
    }

    setStyles() {
        this.curr = (this.curr == 'red') ? 'green' : 'red';
    } 

    handleActions(action) {
        
        switch (action.type) {
            case "SET_CLASS": {
                this.setStyles();
                this.emit('styleChange');
                console.log(`Styles ${this.currClass}`);
                break; 
            }
        }
    } 
} 

const appStore = new AppStore; 

dispatcher.register(appStore.handleActions.bind(appStore)); 

module.exports = appStore; 