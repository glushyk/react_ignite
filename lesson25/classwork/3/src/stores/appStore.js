import {EventEmitter} from 'events'
import dispatcher from '../dispatcher'

class AppStore extends EventEmitter {
    constructor() {
        super();

        this.result = 0;
        this.valA = '';
        this.valB = '';
    } 

    getResult() {
        return this.result;
    }

    getValA() {
        return this.valA;
    }

    getValB() {
        return this.valB;
    }

    culc(calcType) {

        switch(calcType) {
            case 'sum':
                this.result = +this.valA + +this.valB;
                break;
            case 'minus':
                this.result = this.valA - this.valB;
                break;
            case 'mul':
                this.result = this.valA * this.valB;
                break;
            case 'division':
                this.result = this.valA / this.valB;
                break;
            default:
                this.result = "Error";
        }
    }

    saveValA(newVal) {
        var number = newVal.match(/[0-9]+/);
        this.valA = number[0] ? number[0] : '';
    }

    saveValB(newVal) {
        var number = newVal.match(/[0-9]+/);
        this.valB = number[0] ? number[0] : '';
    }

    handleActions(action) {
        
        switch (action.type) {
            case "CALC": {
                this.culc(action.data);
                this.emit('resultChanged');
                break; 
            }
            case "CHANGED_VALA": {
                this.saveValA(action.data);
                this.emit('valAChanged');
                break;
            }
            case "CHANGED_VALB": {
                this.saveValB(action.data);
                this.emit('valBChanged');
                break;
            }
        }
    } 
} 

const appStore = new AppStore; 

dispatcher.register(appStore.handleActions.bind(appStore)); 

export default appStore;