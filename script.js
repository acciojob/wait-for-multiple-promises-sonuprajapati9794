const output = document.getElementById("output");

// Arrow function for creating promises
const createPromise = () => new Promise((resolve) => {
    const time = (Math.random() * 2) + 1; // Random time between 1 and 3 seconds
    setTimeout(() => resolve(time), time * 1000);
});

// Using modern async/await syntax to handle the logic
async function executePromises() {
    // Generate an array of 3 promises
    const promises = [createPromise(), createPromise(), createPromise()];
    
    const start = performance.now();

    // Pause execution here until ALL promises in the array resolve
    const results = await Promise.all(promises);
    
    const end = performance.now();
    const totalTime = (end - start) / 1000;

    // Clear the loading text
    output.innerHTML = "";

    // Iterate through the results using the cleaner Table API
    results.forEach((time, index) => {
        const row = output.insertRow();
        row.insertCell(0).textContent = `Promise ${index + 1}`;
        row.insertCell(1).textContent = time.toFixed(3);
    });

    // Add the final Total row
    const totalRow = output.insertRow();
    totalRow.insertCell(0).innerHTML = "<strong>Total</strong>";
    totalRow.insertCell(1).innerHTML = `<strong>${totalTime.toFixed(3)}</strong>`;
}

// Kick off the execution
executePromises();