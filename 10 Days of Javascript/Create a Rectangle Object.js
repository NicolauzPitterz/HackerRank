/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    return (
        (this.length = a),
        (this.width = b),
        (this.perimeter = 2 * (a + b)),
        (this.area = a * b)
    );
}
