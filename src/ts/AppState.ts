import { Subscriber } from "./Subscriber"

export class AppState {
    public static state : AppState = new AppState()

    public task : any
    public in : any
    public subscribers : Subscriber[] = []
    public subscribers2 : Subscriber[] = []
    public switchers : Subscriber[] = []

    subscribe(component : Subscriber) {
        this.subscribers.push(component)
    }
    create(component2 : HTMLElement) {
        this.task = component2
        this.notify()
    }

    notify() {
        for(let subscriber of this.subscribers) {
            subscriber.update(this.task)
        }
    }

    subscribe2(component : Subscriber) {
        this.subscribers2.push(component)
    }
    create2(component2 : HTMLElement) {
        this.task = component2
        this.notify2()
    }

    notify2() {
        for(let subscriber of this.subscribers2) {
            subscriber.update(this.task)
        }
    }

    mark(component : Subscriber) {
        this.switchers.push(component)
    }
    take(component : HTMLElement) {
        this.task = component
        this.replaceIt()
    }
    replaceIt() {
        for(let switcher of this.switchers) {
            switcher.update(this.task)
        }
    }

    scheduler(d1 : number, task : HTMLElement, checker : HTMLInputElement) {
        this.in = checker
        setInterval(() => {
            if(d1 < Date.now() && checker.checked === false) { 
                this.take(task)
                this.taskChecked(task) 
            }
        }, 1000)
        /* setTimeout(() => {
            clearInterval(int);
        }, 80000, int);
        let int = 
        */
    }

    taskChecked(component : HTMLElement) {
        let inps = component.querySelectorAll("input")
        for(let inp of inps) {
        inp?.setAttribute("checked", "true")
        inp?.setAttribute("disabled", "true")
        }
    }


}