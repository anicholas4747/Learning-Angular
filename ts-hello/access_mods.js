var Point = /** @class */ (function () {
    // the public/private keywords initialize the fields and set access to them at the same time in the constructor
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("X: " + this.x + ", Y: " + this.y);
    };
    return Point;
}());
var pointA = new Point(1, 2);
console.log(pointA.x);
// console.log(pointA.y); // y is private and inaccessible
pointA.draw();
