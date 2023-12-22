let fs = require("fs");

function myowmasyncwrite(data){
    fs.writeFile("a.txt",data,(err)=>{
        if (err) throw err;
        console.log("file write completed");
    })
}

async function main(){
    myowmasyncwrite("hii there / writing asynnchronoully tot he file");
}

main();
console.log("Write Process has started");
