//Question: Write a loop that makes seven calls to console.log to output the following triangle

// Solution 1
for(let i = 1; i <= 7; i++) {
    for(let j = 0; j < i; j++) process.stdout.write("#");
    console.log("")
}


// Solutiobn 2
for(let i = 1; i <= 7; i++) {
    let output = "#" .repeat(i);
    console.log(output)
}