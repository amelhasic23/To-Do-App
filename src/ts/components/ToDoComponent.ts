import { AppState } from "../AppState"

export class ToDoComponent {
    public taskDiv : HTMLDivElement
    public taskH2 : HTMLHeadingElement
    public taskBtn : HTMLButtonElement
    public taskCompleted : HTMLInputElement
    public label : HTMLLabelElement
    public timer : any

    constructor() {
        
        this.taskDiv = <HTMLDivElement>document.createElement("div")
        this.taskH2 = <HTMLHeadingElement>document.createElement("h2")
        this.taskBtn = <HTMLButtonElement>document.createElement("button")
        this.taskBtn.innerHTML = "Delete"
        this.taskCompleted = <HTMLInputElement>document.createElement("input")
        this.taskCompleted.setAttribute("type", "checkbox")
        this.label = <HTMLLabelElement>document.createElement("label")
        this.label.innerHTML = "Completed"
        this.taskDiv.append(this.taskH2)
        this.taskDiv.append(this.taskBtn)
        this.taskDiv.append(this.taskCompleted)
        this.taskDiv.append(this.label)
        this.taskBtn.addEventListener("click", () => {
            this.taskDiv.remove()
        })
        this.taskCompleted.addEventListener("change", () => {
            if(this.taskCompleted.checked === true) {
                AppState.state.take(this.taskDiv)
                this.taskCompleted.setAttribute("disabled", "true")
            }
        })

        
        
    }


}