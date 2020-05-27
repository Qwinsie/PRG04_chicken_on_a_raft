/// <reference path="tree.ts"/>

class Chicken {
    
    public div: HTMLElement
    private game:Game
    private x:number
    private y:number
    private width:number
    private height:number

    constructor(x:number, y:number, tree:Tree,g:Game) {
        this.div = document.createElement("bird")
        tree.div.appendChild(this.div)
        this.game = g        
        this.x = x
        this.y = y
        this.width = 67
        this.height = 110
        
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`


        // maak hier een click listener
        this.div.addEventListener("click", () => this.onClick())
        // de click event handler moet een gun toevoegen
        // als de kip al een gun heeft, dan moet de fire() functie van de gun worden aangeroepen
        
    }

    private onClick() {
        new Gun(this,this.game)
    }

    public update() {

    }

}