import { Subscriber } from "../Subscriber"
import { ToDoComponent } from "./ToDoComponent"

export class Task implements Subscriber {
    public id : number 
    public task : string
    //public time : string
    private static count  = -2
    public mainDiv : HTMLDivElement
    public h1 : HTMLHeadingElement
    public map: Map<number,string> = new Map()
    

    constructor(task : string) {
        //this.id = (new Date()).getTime()
        this.id = Task.count
        Task.count++ 
        this.task = task 
        this.mainDiv = <HTMLDivElement>document.createElement("div")
        this.h1 = <HTMLHeadingElement>document.createElement("h1")
        this.mainDiv.append(this.h1)
        this.map.set(this.id, this.task)
    }
    addTo(parent : HTMLElement) {
        parent.append(this.mainDiv)
    }
  
    update(task: any): void {
        
    }
}
export class UnscheduledTask extends Task implements Subscriber {

    constructor(task : string) {
        super(task)
        this.mainDiv.classList.add("un_div")
        this.h1.innerHTML = "Unscheduled Tasks"
    }

    update(task: any): void {
        this.mainDiv.append(task)
    }
    
}
export class ScheduledTask extends Task implements Subscriber{
    public time : string

    constructor(task : string, time : string) {
        super(task)
        this.mainDiv.classList.add("un_div")
        this.h1.innerHTML = "Scheduled Tasks"
        this.time = time
    } 
    update(task: any): void {
        this.mainDiv.append(task)
    }
}
export class CompletedTasks extends Task implements Subscriber {
    constructor(task : string) {
        super(task)
        this.mainDiv.classList.add("un_div")
        this.h1.innerHTML = "Completed Tasks"
    }
    update(task: any): void {
        this.mainDiv.append(task)
    }
}