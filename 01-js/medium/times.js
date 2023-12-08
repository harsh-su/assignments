/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100 =10^2
2. Sum from 1-100000 = 10^5
3. Sum from 1-1000000000 =10^9
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/


function calculateTime(n) {
    const beforsum = new Date();
    const beforetimeinsec = beforsum.getTime();
    let sum=0;
    for (let i=0;i<n;i++){
        sum+=i;
    }
    let aftersum = new Date();
    let aftertimeinsec = aftersum.getTime();
    return (aftertimeinsec - beforetimeinsec);
}

console.log(calculateTime(1000000000));

