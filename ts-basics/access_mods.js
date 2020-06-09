var Point = /** @class */ (function () {
    // the public/private keywords initialize the fields and set access to them at the same time in the constructor
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Point.prototype, "x", {
        // attr_reader to read private field in Point class
        get: function () {
            return this._x;
        },
        // attr_writer to write to a private field in Point class
        set: function (newX) {
            if (newX < 0)
                throw new Error("value cannot be less than 0");
            this._x = newX;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: false,
        configurable: true
    });
    Point.prototype.draw = function () {
        console.log("X: " + this.x + ", Y: " + this.y);
    };
    return Point;
}());
var pointA = new Point(1, 2);
var xCoord = pointA.x; // x is a property of this point object and the getter method allows you read access
// pointA._x = 47; // _x is a field of this point object and cannot be set (since it's private), so this line would throw an error
pointA.draw();
