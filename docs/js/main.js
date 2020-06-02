"use strict";
var Chicken = (function () {
    function Chicken(x, y, tree, g) {
        var _this = this;
        this.div = document.createElement("bird");
        tree.div.appendChild(this.div);
        this.game = g;
        this.x = x;
        this.y = y;
        this.width = 67;
        this.height = 110;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this.div.addEventListener("click", function () { return _this.onClick(); });
    }
    Chicken.prototype.onClick = function () {
        new Gun(this, this.game);
    };
    Chicken.prototype.update = function () {
    };
    return Chicken;
}());
var Tree = (function () {
    function Tree(x, y, g) {
        this.chickens = [];
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.speed = 0;
        this.div = document.createElement("tree");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.div);
        this.game = g;
        this.speed = Math.random() * 4 + 1;
        this.width = 414;
        this.height = 86;
        this.x = x;
        this.y = y;
        new Chicken(0, -70, this, this.game);
        new Chicken(100, -70, this, this.game);
        new Chicken(200, -70, this, this.game);
        new Chicken(300, -70, this, this.game);
    }
    Tree.prototype.getChickens = function () {
        return this.chickens;
    };
    Tree.prototype.move = function () {
        this.x += this.speed;
        if (this.x > window.innerWidth)
            this.x = -450;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Tree.prototype.update = function () {
    };
    return Tree;
}());
var Game = (function () {
    function Game() {
        this.trees = [];
        this.bullets = [];
        this.trees.push(new Tree(100, 100, this));
        this.trees.push(new Tree(100, 500, this));
        this.trees.push(new Tree(100, 1000, this));
        this.trees.push(new Tree(100, 1500, this));
        this.gameLoop();
    }
    Game.prototype.addBullet = function (x, y) {
        this.bullets.push(new Bullet(x, y));
    };
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.trees; _i < _a.length; _i++) {
            var tree = _a[_i];
            tree.move();
            tree.update();
        }
        for (var _b = 0, _c = this.bullets; _b < _c.length; _b++) {
            var bullet = _c[_b];
            bullet.move();
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Bullet = (function () {
    function Bullet(x, y) {
        this.x = 0;
        this.y = 0;
        this.width = 22;
        this.height = 22;
        this.xspeed = 0;
        this.yspeed = 0;
        this.div = document.createElement("bullet");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.div);
        this.x = x;
        this.y = y;
        this.xspeed = -1;
        this.yspeed = 1;
        this.move();
    }
    Bullet.prototype.move = function () {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Bullet;
}());
var Gun = (function () {
    function Gun(chicken, g) {
        this.div = document.createElement("gun");
        chicken.div.appendChild(this.div);
        this.x = 20;
        this.y = 40;
        this.game = g;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        var rect = this.div.getBoundingClientRect();
        this.game.addBullet(rect.left, rect.top);
    }
    Gun.prototype.fire = function () {
        var rect = this.div.getBoundingClientRect();
        this.game.addBullet(rect.left, rect.top);
        console.log("YES!");
        return rect.left, rect.top;
    };
    return Gun;
}());
//# sourceMappingURL=main.js.map