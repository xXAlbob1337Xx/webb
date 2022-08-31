startTime();
function startTime() {
const today = new date();
let h = today.getHours();
let m = today.getMinutes();
let s = today.getSeconds();
m = checktime(m);
s = checktime(s);
documnet.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
setTimeout(startTime, 1000);


function checkTime();
if 
}