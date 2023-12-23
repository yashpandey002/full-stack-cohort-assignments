"use strict";

let num = 0;
function incrementCounter() {
    num++;
    console.log(num);
}

setInterval(incrementCounter, 1000);
