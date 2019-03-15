document.getElementById("myBox")
.addEventListener("mouseenter", startCounter);

document.getElementById("myBox")
.addEventListener("mouseleave", stopCounter);

let count = 0;  
var Timer = undefined;

function startCounter(){
    Timer = setInterval(myTimer, 1000);
}

function stopCounter(){
    clearInterval(Timer);
}
   
function myTimer() {
    count++;
    document.getElementById("counter").innerHTML = count;
}

