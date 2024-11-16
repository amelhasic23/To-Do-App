import { AppState } from "../AppState"
import { ToDoComponent } from "./ToDoComponent"
import { ScheduledTask, Task } from "./ToDoTask"

export class ToDoForm {
    public div : HTMLDivElement
    public naziv : HTMLInputElement
    public pNaziv : HTMLParagraphElement
    public checkB : HTMLInputElement
    public label : HTMLLabelElement
    public vreme : HTMLInputElement
    public pVreme : HTMLParagraphElement
    public btn : HTMLButtonElement

    constructor() {
       this.div = <HTMLDivElement>document.createElement("div")
       this.div.classList.add("form_div")
       this.naziv = <HTMLInputElement>document.createElement("input")
       this.naziv.setAttribute("type", "text")
       this.naziv.setAttribute("placeholder", "Naziv zadatka")
       this.pNaziv = <HTMLParagraphElement>document.createElement("p")
       this.pNaziv.style.color = "red"
       this.checkB = <HTMLInputElement>document.createElement("input")
       this.checkB.setAttribute("type", "checkbox")
       this.checkB.setAttribute("id", "check")
       this.checkB.classList.add("check")
       this.label = <HTMLLabelElement>document.createElement("label")
       this.label.setAttribute("for", "check")
       this.label.innerHTML = "čekirajte ukoliko imate rok"
       this.vreme = <HTMLInputElement>document.createElement("input")
       this.vreme.setAttribute("type", "text")
       this.vreme.setAttribute("placeholder", "MM/DD/GGGG/ČČ:MM")
       this.pVreme = <HTMLParagraphElement>document.createElement("p")
       this.pVreme.style.color = "red"
       this.div.append(this.naziv)
       this.div.append(this.pNaziv)
       this.div.append(this.checkB)
       this.div.append(this.label)
       this.checkB.onchange = () => {
        if(this.checkB.checked === true) {
            this.div.insertBefore(this.vreme, this.btn)
            this.div.insertBefore(this.pVreme, this.btn)
        } else { 
            this.vreme.remove()
            this.pVreme.remove()
        }

       }
       
       this.btn = <HTMLButtonElement>document.createElement("button")
       this.btn.innerText = "Dodaj"
       this.btn.classList.add("add")
       this.div.append(this.btn)
       
       
       this.btn.addEventListener("click", () => {
        this.pNaziv.innerHTML = ""
        
        let val1 = this.naziv.value
        let val2 = this.vreme.value

       
            if(val1.trim() === "") {
                this.pNaziv.innerHTML = "Polje ne može biti prazno, unesite naziv zadatka!"   
                throw new Error()
            } 
       
        if(this.checkB.checked === false) {
        let noviTask = new Task(val1)
        this.naziv.value = ""
        this.naziv.setAttribute("placeholder", "Naziv zadatka")
        if(this.vreme) {
            this.vreme.value = ""
            this.vreme.setAttribute("placeholder", "MM/DD/GGGG/ČČ:MM")
        }
        let toDoComponent = new ToDoComponent()
        for(let [key, value] of noviTask.map) {
            toDoComponent.taskH2.innerHTML = `<p>${key}.  ${value}</p>` 
        }
        AppState.state.create(toDoComponent.taskDiv)
        }
        if(this.checkB.checked === true) {
            this.pVreme.innerHTML = ""
            if(val2.trim().length !== 16) {
                this.pVreme.innerHTML = "Polje mora imati tačno 16 karaktera, u formatu MM/DD/GGGG/ČČ:MM"
                throw new Error()
            }
           
        let noviTask = new ScheduledTask(val1, val2)
        this.naziv.value = ""
        this.naziv.setAttribute("placeholder", "Naziv zadatka")
        if(this.vreme) {
            this.vreme.value = ""
            this.vreme.setAttribute("placeholder", "MM/DD/GGGG/ČČ:MM")
        }
        let toDoComponent = new ToDoComponent()
        for(let [key, value] of noviTask.map) {
            toDoComponent.taskH2.innerHTML = `<p>${key}.  ${value}; deadline: ${noviTask.time} </p>` 
            toDoComponent.timer = Date.parse(noviTask.time)
            AppState.state.scheduler(toDoComponent.timer, toDoComponent.taskDiv, toDoComponent.taskCompleted) 
        }
        AppState.state.create2(toDoComponent.taskDiv)
        } 
       })
       
    }
    addTo(parent : HTMLElement) {
        parent.append(this.div)
    }
}