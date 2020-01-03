class PointObject {
    x:number;
    y:number;

    draw() {
        console.log('x: ' + this.x + ' and y: ' + this.y);
    }

    getDistance(another: Point) {
        
    }
}

// let point: Point = new Point();
let point = new PointObject();
point.x=1;
point.y=2;
point.draw();