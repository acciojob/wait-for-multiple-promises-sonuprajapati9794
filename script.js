const output = document.getElementById("output");


function createPromise() {
  return new Promise((resolve) => {
    const time = Math.random() * 2 + 1; // 1–3 seconds

    setTimeout(() => {
      resolve(time);
    }, time * 1000);
  });
}


const p1 = createPromise();
const p2 = createPromise();
const p3 = createPromise();

// start time
const start = performance.now();


Promise.all([p1, p2, p3]).then((times) => {
  
  output.innerHTML = "";

  
  times.forEach((time, index) => {
    const row = document.createElement("tr");

    const col1 = document.createElement("td");
    col1.textContent = `Promise ${index + 1}`;

    const col2 = document.createElement("td");
    col2.textContent = time.toFixed(3);

    row.appendChild(col1);
    row.appendChild(col2);

    output.appendChild(row);
  });

  // total time (longest promise)
  const totalTime = Math.max(...times);

  const totalRow = document.createElement("tr");

  const col1 = document.createElement("td");
  col1.textContent = "Total";

  const col2 = document.createElement("td");
  col2.textContent = totalTime.toFixed(3);

  totalRow.appendChild(col1);
  totalRow.appendChild(col2);

  output.appendChild(totalRow);
});