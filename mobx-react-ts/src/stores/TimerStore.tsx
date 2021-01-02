import {observable, action} from 'mobx';

export default class TimerStore {
    @observable number: number = 0;
}