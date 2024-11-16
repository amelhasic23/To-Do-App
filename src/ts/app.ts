import { AppState } from "./AppState"
import { ToDoComponent } from "./components/ToDoComponent"
import { ToDoForm } from "./components/ToDoForm"
import { CompletedTasks, ScheduledTask, Task, UnscheduledTask } from "./components/ToDoTask"

const divApp = <HTMLDivElement>document.querySelector("#app")

const forma = new ToDoForm()
forma.addTo(divApp)
const naslov = <HTMLHeadingElement>document.createElement("h1")
naslov.innerHTML = "MY TASKS"
divApp.append(naslov)
const podDiv = <HTMLDivElement>document.createElement("div")
podDiv.classList.add("pod_div")
divApp.append(podDiv)

const unscheduled = new UnscheduledTask("")
AppState.state.subscribe(unscheduled)
unscheduled.addTo(podDiv)
const scheduled = new ScheduledTask("", "")
AppState.state.subscribe2(scheduled)
scheduled.addTo(podDiv)
const completed = new CompletedTasks("")
AppState.state.mark(completed)
completed.addTo(podDiv)
//  https://bojandjurdjevic.github.io/TODOlist/