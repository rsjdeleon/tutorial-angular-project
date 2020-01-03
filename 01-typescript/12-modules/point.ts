export class Point {

    constructor (private _x?: number, private _y?: number) {  // you can use public 
    }

    public draw() { 
        console.log('x: ' + this._x + ' and y: ' + this._y);
    }

}