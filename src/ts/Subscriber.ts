export interface Subscriber {
    update(task : string) : void
}
export interface Switcher {
    switchTo(task : string) : void
}