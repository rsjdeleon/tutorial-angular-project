class PointAccessModifierConstructor {

    constructor (private x?: number, private y?: number) {  // you can use public 
    }

    public draw() { 
        console.log('x: ' + this.x + ' and y: ' + this.y);
    }

}

let pointB = new PointAccessModifierConstructor(1, 2);
pointB.draw();