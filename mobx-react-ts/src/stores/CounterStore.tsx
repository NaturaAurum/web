import {makeAutoObservable} from 'mobx';

class CounterStore {
    count: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    increase = () => {
        this.count++;
        console.log(this.count);
    }

    decrease = () => {
        this.count--;
    }
}

export default CounterStore;