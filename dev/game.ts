/// <reference path="tree.ts"/>

class Game {
    
    private trees:Tree[] = []
    public bullets:Bullet[] = []

    constructor() {
        // de game heeft trees nodig
        this.trees.push(new Tree(100,100,this))
        this.trees.push(new Tree(100,500,this))
        this.trees.push(new Tree(100,1000,this))
        this.trees.push(new Tree(100,1500,this))

        // start de game loop
        this.gameLoop()
    }

    public addBullet(x:number,y:number) {
        this.bullets.push(new Bullet(x,y))
    }
    
    private gameLoop(){
        // gebruik een for..of loop om de move functie van alle trees in de array aan te roepen
        for (let tree of this.trees) {
            tree.move()
            tree.update()
        } 
        for (let bullet of this.bullets) {
            bullet.move()
        }
        // animation
        requestAnimationFrame(() => this.gameLoop())
    }
} 

window.addEventListener("load", () => new Game())