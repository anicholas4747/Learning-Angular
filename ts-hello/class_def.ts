// wrt custom_types.ts, interface is good if only one method will use that custom type
// if multiple functions will use the type, make a whole class with the fields and methods

class Point {
  //fields
  x: number;
  y: number;

  //methods
  draw () {
    // ...
  }

  getDistance (anotherPoint: Point) {
    // ...
  }
}

let pointA = new Point();
// "pointA." shows all the methods and fields available on Point objects
pointA.x = 1;
pointA.y = 2;
pointA.draw();