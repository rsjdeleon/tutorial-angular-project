class PointConstructor {
    x:number;
    y:number;

    constructor (x?: number, y?: number) { // ? is optional
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('x: ' + this.x + ' and y: ' + this.y);
    }

}

// let point: Point = new Point();
let point1 = new PointConstructor(1, 2);
point.draw();