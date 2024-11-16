"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoComponent = void 0;
const AppState_1 = require("../AppState");
class ToDoComponent {
    constructor() {
        this.taskDiv = document.createElement("div");
        this.taskH2 = document.createElement("h2");
        this.taskBtn = document.createElement("button");
        this.taskBtn.innerHTML = "Delete";
        this.taskCompleted = document.createElement("input");
        this.taskCompleted.setAttribute("type", "checkbox");
        this.label = document.createElement("label");
        this.label.innerHTML = "Completed";
        this.taskDiv.append(this.taskH2);
        this.taskDiv.append(this.taskBtn);
        this.taskDiv.append(this.taskCompleted);
        this.taskDiv.append(this.label);
        this.taskBtn.addEventListener("click", () => {
            this.taskDiv.remove();
        });
        this.taskCompleted.addEventListener("change", () => {
            if (this.taskCompleted.checked === true) {
                AppState_1.AppState.state.take(this.taskDiv);
                this.taskCompleted.setAttribute("disabled", "true");
            }
        });
    }
}
exports.ToDoComponent = ToDoComponent;
//# sourceMappingURL=ToDoComponent.js.map