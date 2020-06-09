class Point {
  // the public/private keywords initialize the fields and set access to them at the same time in the constructor
  constructor(private _x?: number, private _y?: number) {
  }

  // attr_reader to read private field in Point class
  get x () {
    return this._x;
  }

  get y () {
    return this._y;
  }

  // attr_writer to write to a private field in Point class
  set x (newX) {
    if (newX < 0)
      throw new Error("value cannot be less than 0");

    this._x = newX;
  }

  draw () {
    console.log(`X: ${this.x}, Y: ${this.y}`);
  }
}

let pointA = new Point(1, 2);
let xCoord = pointA.x; // x is a property of this point object and the getter method allows you read access
// pointA._x = 47; // _x is a field of this point object and cannot be set (since it's private), so this line would throw an error
pointA.draw();