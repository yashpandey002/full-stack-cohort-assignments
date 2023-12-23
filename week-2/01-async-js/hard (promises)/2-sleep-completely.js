/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const startTime = Date.now();

    while (Date.now() - startTime < milliseconds) {
        // Busy-waiting loop
    }

    return Promise.resolve();
}

sleep(3000).then(() => {
    console.log("Thread halted for 3000 milliseconds");
});

module.exports = sleep;
