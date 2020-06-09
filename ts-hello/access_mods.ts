class Point {
  // the public/private keywords initialize the fields and set access to them at the same time in the constructor
  constructor(public x?: number, private y?: number) {
  }

  draw () {
    console.log(`X: ${this.x}, Y: ${this.y}`);
  }
}

let pointA = new Point(1, 2);
console.log(pointA.x);
// console.log(pointA.y); // y is private and inaccessible
pointA.draw();