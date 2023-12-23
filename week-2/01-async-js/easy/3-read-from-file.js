"use strict";

const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

let a = 0;
for (let i = 0; i < 10000000000; i++) {
    a++;
}
