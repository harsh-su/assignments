
function viewtime(){
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    console.log(`${hours}::${minutes}::${seconds}`);
}

function viewUTCtime(){
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let z= "AM";
    if (hours >=12 ){
        hours = hours -12;
        z="PM";
    }
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    console.log(`${hours}::${minutes}::${seconds} ${z}`);
}

// while(true){
//    setInterval(() => {
//     viewtime();
//    }, 1000);
// }

let i = 0;

function counter() {
    viewUTCtime();
}

setInterval(counter, 1000);

