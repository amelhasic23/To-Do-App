"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompletedTasks = exports.ScheduledTask = exports.UnscheduledTask = exports.Task = void 0;
class Task {
    constructor(task) {
        this.map = new Map();
        //this.id = (new Date()).getTime()
        this.id = Task.count;
        Task.count++;
        this.task = task;
        this.mainDiv = document.createElement("div");
        this.h1 = document.createElement("h1");
        this.mainDiv.append(this.h1);
        this.map.set(this.id, this.task);
    }
    addTo(parent) {
        parent.append(this.mainDiv);
    }
    update(task) {
    }
}
//public time : string
Task.count = -2;
exports.Task = Task;
class UnscheduledTask extends Task {
    constructor(task) {
        super(task);
        this.mainDiv.classList.add("un_div");
        this.h1.innerHTML = "Unscheduled Tasks";
    }
    update(task) {
        this.mainDiv.append(task);
    }
}
exports.UnscheduledTask = UnscheduledTask;
class ScheduledTask extends Task {
    constructor(task, time) {
        super(task);
        this.mainDiv.classList.add("un_div");
        this.h1.innerHTML = "Scheduled Tasks";
        this.time = time;
    }
    update(task) {
        this.mainDiv.append(task);
    }
}
exports.ScheduledTask = ScheduledTask;
class CompletedTasks extends Task {
    constructor(task) {
        super(task);
        this.mainDiv.classList.add("un_div");
        this.h1.innerHTML = "Completed Tasks";
    }
    update(task) {
        this.mainDiv.append(task);
    }
}
exports.CompletedTasks = CompletedTasks;
//# sourceMappingURL=ToDoTask.js.map