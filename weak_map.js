// Create Weak map
let map = new WeakMap();

// Create a namespace that will only be accessible by instance of Point.
let internal = function (object) {
    if (!map.has(object))
    	// store object and corresponding propery in WeakMap.
        map.set(object, {});
    return map.get(object);
}

function Point(x, y) {
	// set namespace as private property of Point
    internal(this).x = x;
    internal(this).y = y;
}

Point.prototype.getX = function () {
    return internal(this).x;
};

Point.prototype.setX = function (x) {
    internal(this).x = x;
};

Point.prototype.getY = function () {
    return internal(this).y;
};

Point.prototype.setY = function () {
    internal(this).y = y;
};