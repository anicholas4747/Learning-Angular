class Point {
  // still need fields even if you have a constructor
  // private keyword removes read/write priviledges from properties/methods in a class
  private x: number; 
  private y: number;

  constructor (x?: number, y?: number) { // the ? makes the parameter optional on initialization
    this.x = x;
    this.y = y;
  }

  draw () {
    console.log(`X: ${this.x}, Y: ${this.y}`);
  }
}

let pointA = new Point(1, 2);
pointA.draw();