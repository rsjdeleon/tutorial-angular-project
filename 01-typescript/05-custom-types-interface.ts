interface Point {
    x:number,
    y:number
}

// implementation of Interface
let drawPoint1 = (point: Point) => {
    // ...
}

// inline annotation interface
let drawPoint2 = (point: { x: number, y: number}) => {
    // ...
}

drawPoint2({
    x: 1,
    y: 2
});