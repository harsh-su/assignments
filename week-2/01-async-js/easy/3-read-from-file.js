const fs = require("fs");

fs.readFile("a.txt","utf-8",(err,data)=>{
    console.log(data);
})

let ans = 0;
for (let i;i<1000000000000;i++){
    console.log(i);
}

console.log(ans);
