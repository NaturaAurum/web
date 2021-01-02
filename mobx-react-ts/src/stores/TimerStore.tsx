import { makeObservable, observable, action } from 'mobx';

export default class TimerStore {
    private timerId: NodeJS.Timeout | null = null;

    isRunning: boolean = false;

    minute:string = "0";
    seconds:string = "0";

    targetTime: number = 0;

    constructor() {
        makeObservable(this, {
            isRunning: observable,
            minute: observable,
            seconds: observable,
            setMinute: action,
            setSeconds: action,
            run: action
        })
    }

    public setMinute = (value: string) => {
        this.minute = value;
    }

    public setSeconds = (value: string) => {
        this.seconds = value;
    }

    private start = () => {
        var minuteNumber = Number.parseInt(this.minute);
        var secondsNumber = Number.parseInt(this.seconds);

        this.targetTime = (minuteNumber * 60 + secondsNumber);

        this.timerId = setInterval(() => {
            this.targetTime--;
            var remainTime = this.targetTime;
            var calcMinute = Math.floor(remainTime / 60);
            var calcSeconds = Math.floor(remainTime % 60);
            console.log(calcMinute);
            this.setMinute(calcMinute.toString());
            this.setSeconds(calcSeconds.toString());
        }, 1000);
        this.isRunning = true;
    }

    private stop = () => {
        if (this.timerId) {
            clearInterval(this.timerId);
        }
        this.isRunning = false;
    }

    public run = () => {
        if (this.isRunning) {
            this.stop();
        }
        else {
            this.start();
        }
    }
}