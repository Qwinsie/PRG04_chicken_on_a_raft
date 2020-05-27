/// <reference path="chicken.ts" />

class Tree {
    
    public div: HTMLElement
    private chickens : Chicken[] = []
    private game:Game

    private x:number = 0
    private y:number = 0

    private width: number = 0
    private height:number = 0

    private speed:number = 0

    constructor(x:number, y:number,g:Game) {
        this.div = document.createElement("tree")
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.div)
        this.game = g
        this.speed = Math.random() * 4 + 1
        this.width = 414
        this.height = 86
        this.x = x
        this.y = y

        // dit vlot heeft kippen nodig !
        new Chicken(0,-70,this,this.game)
        new Chicken(100,-70,this,this.game)
        new Chicken(200,-70,this,this.game)
        new Chicken(300,-70,this,this.game)
        // let tree = document.getElementsByTagName("tree")[0]
        // tree.appendChild()
    }

    public getChickens() : Chicken[] {
        return this.chickens
    }
    
    public move():void {
        this.x += this.speed
        if(this.x > window.innerWidth) this.x = -450
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
    public update():void {
    }
}