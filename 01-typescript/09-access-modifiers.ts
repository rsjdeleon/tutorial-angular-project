class PointAccessModifier {
    
    private x:number;
    private y:number;

    constructor (x?: number, y?: number) { // ? is optional
        this.x = x;
        this.y = y;
    }

    public draw() { 
        console.log('x: ' + this.x + ' and y: ' + this.y);
    }

}

let pointA = new PointAccessModifier(1, 2);
pointA.draw();