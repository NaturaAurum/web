"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var Timer = /** @class */ (function () {
    function Timer() {
        this.time = 0;
    }
    __decorate([
        mobx_1.observable
    ], Timer.prototype, "time", void 0);
    return Timer;
}());
var timer = new Timer();
mobx_1.autorun(function () {
    console.log(timer.time + "sec");
});
setInterval(function () {
    timer.time++;
}, 1000);
