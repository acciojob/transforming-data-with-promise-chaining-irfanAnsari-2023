//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function () {
    let inputValue = document.getElementById("ip").value;
    let outputDiv = document.getElementById("output");

    // Convert input to number
    let num = Number(inputValue);
    if (isNaN(num)) {
        outputDiv.textContent = "Please enter a valid number.";
        return;
    }

    // Step 1: Initial Promise (Resolves after 2 seconds)
    new Promise(resolve => {
        setTimeout(() => {
            outputDiv.textContent = `Result: ${num}`;
            resolve(num);
        }, 2000);
    })
    // Step 2: Multiply by 2 (After 2 seconds)
    .then(result => {
        return new Promise(resolve => {
            setTimeout(() => {
                let newValue = result * 2;
                outputDiv.textContent = `Result: ${newValue}`;
                resolve(newValue);
            }, 2000);
        });
    })
    // Step 3: Subtract 3 (After 1 second)
    .then(result => {
        return new Promise(resolve => {
            setTimeout(() => {
                let newValue = result - 3;
                outputDiv.textContent = `Result: ${newValue}`;
                resolve(newValue);
            }, 1000);
        });
    })
    // Step 4: Divide by 2 (After 1 second)
    .then(result => {
        return new Promise(resolve => {
            setTimeout(() => {
                let newValue = result / 2;
                outputDiv.textContent = `Result: ${newValue}`;
                resolve(newValue);
            }, 1000);
        });
    })
    // Step 5: Add 10 (After 1 second)
    .then(result => {
        return new Promise(resolve => {
            setTimeout(() => {
                let newValue = result + 10;
                outputDiv.textContent = `Final Result: ${newValue}`;
                resolve(newValue);
            }, 1000);
        });
    });
});
