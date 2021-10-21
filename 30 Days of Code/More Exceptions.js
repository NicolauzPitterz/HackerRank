//Write your code here
class Calculator {
    constructor(n, p) {
        this.n = n;
        this.p = p;
    }

    power(n, p) {
        if (n >= 0 && p >= 0) {
            return Math.pow(n, p);
        } else {
            return "n and p should be non-negative";
        }
    }
}
