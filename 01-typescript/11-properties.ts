class PointProperties {

    constructor (private _x?: number, private _y?: number) {  // you can use public 
    }

    public draw() { 
        console.log('x: ' + this._x + ' and y: ' + this._y);
    }

    get x() {
        return this._x;
    }

    set x(value : number) {
        if (value < 0) {
            throw new Error('value cannot be less than 0');
        }
        this._x = value;
    }

    // // Common way
    // getX() {
    //     return this.x;
    // }

    // setX(value : number) {
    //     if (value < 0) {
    //         throw new Error('value cannot be less than 0');
    //     }
    //     this.x = value;
    // }

}

let pointC = new PointProperties(1, 2);
//let x = pointC.getX();
//pointC.setX(4);
let x = pointC.x;
pointC.x = 10;
pointC.draw();