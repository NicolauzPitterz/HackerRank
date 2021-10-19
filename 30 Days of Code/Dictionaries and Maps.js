function processData(input) {
    //Enter your code here
    var tempArr = input.split("\n");
    var lengthArr = parseInt(tempArr.splice(0, 1));
    var queries = tempArr.splice(lengthArr);
    var pbArr = tempArr.map((item) => item.split(" "));
    var pbMap = new Map(pbArr);

    queries.map((name) => {
        if (pbMap.has(name)) console.log(name + "=" + pbMap.get(name));
        else console.log("Not found");
    });
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
