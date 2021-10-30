"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on("end", function () {
    inputString = inputString.split("\n");

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    const timeFormat = s.slice(-2);
    let timeArr = s.slice(0, -2).split(":");

    if (timeFormat == "AM" && timeArr[0] === "12") {
        timeArr[0] = "00";
    } else if (timeFormat == "PM") {
        timeArr[0] = (timeArr[0] % 12) + 12;
    }

    return timeArr.join(":");
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
