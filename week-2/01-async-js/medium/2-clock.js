"use strict";

let hours = 0;
let minutes = 0;
let seconds = 0;

function updateClock() {
    seconds++;

    if (seconds > 60) {
        seconds = 0;
        minutes++;
        if (minutes > 60) {
            minutes = 0;
            hours++;
            if (hours > 24) {
                hours = 1;
            }
        }
    }

    console.clear();
    console.log(`${hours}:${minutes}:${seconds}`);
}

setInterval(updateClock, 1000);
