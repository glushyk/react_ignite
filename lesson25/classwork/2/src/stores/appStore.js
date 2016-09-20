import {EventEmitter} from 'events'
import dispatcher from '../dispatcher'

class AppStore extends EventEmitter {
    constructor() {
        super();
        this.currCount = 0;
    } 

    getCount() {
        return this.currCount;
    }

    increment() {
        this.currCount += 1;
    }

    reset() {
        this.currCount = 0;
    } 

    handleActions(action) {
        
        switch (action.type) {
            case "INCREMENT": {
                this.increment();
                this.emit('countChange');
                console.log(`Counter: ${this.currCount}`);
                break; 
            }
            case "RESET": {
                this.reset();
                this.emit('countChange');
                console.log(`Counter: ${this.currCount}`);
                break;
            }
        }
    } 
} 

const appStore = new AppStore; 

dispatcher.register(appStore.handleActions.bind(appStore)); 

export default appStore; 