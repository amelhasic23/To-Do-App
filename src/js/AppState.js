"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppState = void 0;
class AppState {
    constructor() {
        this.subscribers = [];
        this.subscribers2 = [];
        this.switchers = [];
    }
    subscribe(component) {
        this.subscribers.push(component);
    }
    create(component2) {
        this.task = component2;
        this.notify();
    }
    notify() {
        for (let subscriber of this.subscribers) {
            subscriber.update(this.task);
        }
    }
    subscribe2(component) {
        this.subscribers2.push(component);
    }
    create2(component2) {
        this.task = component2;
        this.notify2();
    }
    notify2() {
        for (let subscriber of this.subscribers2) {
            subscriber.update(this.task);
        }
    }
    mark(component) {
        this.switchers.push(component);
    }
    take(component) {
        this.task = component;
        this.replaceIt();
    }
    replaceIt() {
        for (let switcher of this.switchers) {
            switcher.update(this.task);
        }
    }
    scheduler(d1, task, checker) {
        this.in = checker;
        setInterval(() => {
            if (d1 < Date.now() && checker.checked === false) {
                this.take(task);
                this.taskChecked(task);
            }
        }, 1000);
        /* setTimeout(() => {
            clearInterval(int);
        }, 80000, int);
        let int =
        */
    }
    taskChecked(component) {
        let inps = component.querySelectorAll("input");
        for (let inp of inps) {
            inp === null || inp === void 0 ? void 0 : inp.setAttribute("checked", "true");
            inp === null || inp === void 0 ? void 0 : inp.setAttribute("disabled", "true");
        }
    }
}
AppState.state = new AppState();
exports.AppState = AppState;
//# sourceMappingURL=AppState.js.map