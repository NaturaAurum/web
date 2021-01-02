
import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

import TimerStore from '../stores/TimerStore';

import {Form, NumberInput} from '../utils/Input';

interface TimerProps {
    timerStore?: TimerStore;
}

@inject('timerStore')
@observer
class Timer extends Component<TimerProps> {
    timerStore: TimerStore | undefined;
    
    constructor(props: TimerProps){
        super(props);
        this.timerStore = props.timerStore;
    }

    render(){
        return(
            <div>
                {!this.timerStore?.isRunning ? 
                (<Form onSubmit={this.onFormSubmit}>
                    <NumberInput value={this.timerStore?.minute} onChange={this.onMinuteChange}/>
                    <NumberInput value={this.timerStore?.seconds} onChange={this.onSecondChange}/>
                </Form>) : (
                    <div>
                        {this.timerStore?.minute} : {this.timerStore?.seconds}
                    </div>
                )}
                <button onClick={this.timerStore?.run}>
                    {this.timerStore?.isRunning ? "Stop" : "Start"}
                </button>
            </div>
        )
    }

    onFormSubmit = (e: React.FormEvent) => {

    }

    onMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.timerStore?.setMinute(e.target.value);
    }

    onSecondChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.timerStore?.setSeconds(e.target.value);
    }
}

export default Timer;