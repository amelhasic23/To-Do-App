"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoForm = void 0;
const AppState_1 = require("../AppState");
const ToDoComponent_1 = require("./ToDoComponent");
const ToDoTask_1 = require("./ToDoTask");
class ToDoForm {
    constructor() {
        this.div = document.createElement("div");
        this.div.classList.add("form_div");
        this.naziv = document.createElement("input");
        this.naziv.setAttribute("type", "text");
        this.naziv.setAttribute("placeholder", "Naziv zadatka");
        this.pNaziv = document.createElement("p");
        this.pNaziv.style.color = "red";
        this.checkB = document.createElement("input");
        this.checkB.setAttribute("type", "checkbox");
        this.checkB.setAttribute("id", "check");
        this.checkB.classList.add("check");
        this.label = document.createElement("label");
        this.label.setAttribute("for", "check");
        this.label.innerHTML = "čekirajte ukoliko imate rok";
        this.vreme = document.createElement("input");
        this.vreme.setAttribute("type", "text");
        this.vreme.setAttribute("placeholder", "MM/DD/GGGG/ČČ:MM");
        this.pVreme = document.createElement("p");
        this.pVreme.style.color = "red";
        this.div.append(this.naziv);
        this.div.append(this.pNaziv);
        this.div.append(this.checkB);
        this.div.append(this.label);
        this.checkB.onchange = () => {
            if (this.checkB.checked === true) {
                this.div.insertBefore(this.vreme, this.btn);
                this.div.insertBefore(this.pVreme, this.btn);
            }
            else {
                this.vreme.remove();
                this.pVreme.remove();
            }
        };
        this.btn = document.createElement("button");
        this.btn.innerText = "Dodaj";
        this.btn.classList.add("add");
        this.div.append(this.btn);
        this.btn.addEventListener("click", () => {
            this.pNaziv.innerHTML = "";
            let val1 = this.naziv.value;
            let val2 = this.vreme.value;
            if (val1.trim() === "") {
                this.pNaziv.innerHTML = "Polje ne može biti prazno, unesite naziv zadatka!";
                throw new Error();
            }
            if (this.checkB.checked === false) {
                let noviTask = new ToDoTask_1.Task(val1);
                this.naziv.value = "";
                this.naziv.setAttribute("placeholder", "Naziv zadatka");
                if (this.vreme) {
                    this.vreme.value = "";
                    this.vreme.setAttribute("placeholder", "MM/DD/GGGG/ČČ:MM");
                }
                let toDoComponent = new ToDoComponent_1.ToDoComponent();
                for (let [key, value] of noviTask.map) {
                    toDoComponent.taskH2.innerHTML = `<p>${key}.  ${value}</p>`;
                }
                AppState_1.AppState.state.create(toDoComponent.taskDiv);
            }
            if (this.checkB.checked === true) {
                this.pVreme.innerHTML = "";
                if (val2.trim().length !== 16) {
                    this.pVreme.innerHTML = "Polje mora imati tačno 16 karaktera, u formatu MM/DD/GGGG/ČČ:MM";
                    throw new Error();
                }
                let noviTask = new ToDoTask_1.ScheduledTask(val1, val2);
                this.naziv.value = "";
                this.naziv.setAttribute("placeholder", "Naziv zadatka");
                if (this.vreme) {
                    this.vreme.value = "";
                    this.vreme.setAttribute("placeholder", "MM/DD/GGGG/ČČ:MM");
                }
                let toDoComponent = new ToDoComponent_1.ToDoComponent();
                for (let [key, value] of noviTask.map) {
                    toDoComponent.taskH2.innerHTML = `<p>${key}.  ${value}; deadline: ${noviTask.time} </p>`;
                    toDoComponent.timer = Date.parse(noviTask.time);
                    AppState_1.AppState.state.scheduler(toDoComponent.timer, toDoComponent.taskDiv, toDoComponent.taskCompleted);
                }
                AppState_1.AppState.state.create2(toDoComponent.taskDiv);
            }
        });
    }
    addTo(parent) {
        parent.append(this.div);
    }
}
exports.ToDoForm = ToDoForm;
//# sourceMappingURL=ToDoForm.js.map