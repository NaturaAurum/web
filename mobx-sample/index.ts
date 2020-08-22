import {observable, autorun} from 'mobx';

class Timer {
    @observable time = 0;
}

const timer = new Timer();

autorun(() => {
    console.log(timer.time + "sec");
});

setInterval(()=> {
    timer.time++;
}, 1000);