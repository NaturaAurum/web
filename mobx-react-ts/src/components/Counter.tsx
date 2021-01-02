import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import CounterStore from '../stores/CounterStore';

interface CounterProps {
    counterStore?: CounterStore;
}

@inject('counterStore')
@observer
class Counter extends Component<CounterProps> {
    render() {
        const {counterStore} = this.props;
        return (
            <div>
                <h1>{counterStore?.count}</h1>
                <div>{counterStore?.count}</div>
                <button onClick={counterStore?.increase}>+1</button>
                <button onClick={counterStore?.decrease}>-1</button>
            </div>
        )
    }
}

export default Counter;
