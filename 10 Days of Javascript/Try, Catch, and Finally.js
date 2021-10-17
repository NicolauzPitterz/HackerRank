/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        const rString = (str) => [...str].reverse().join("");
        console.log(rString(s));
    } catch {
        console.log("s.split is not a function" + "\n" + s);
    }
}
