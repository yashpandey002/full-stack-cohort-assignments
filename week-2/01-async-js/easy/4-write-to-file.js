"use strict";

const fs = require("fs");

const content = "Hello, Node.js!";

fs.writeFile("example.txt", content, "utf8", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("File has been written.");
});
