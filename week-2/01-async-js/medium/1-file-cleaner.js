"use strict";

const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    const cleanedData = data
        .split(" ")
        .filter((word) => word != "")
        .join(" ");
    console.log(cleanedData);
});
