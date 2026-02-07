const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
recursion(n);

function recursion(n) {
    if (n < 1) {
        return;
    }
    console.log('* '.repeat(n))
    recursion(n - 1);
    console.log('* '.repeat(n));
}