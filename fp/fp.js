startTime();
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds(); // hämtar tid
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('tid').innerHTML =  h + ":" + m + ":" + s; // kolon mellan så att de ser ut som en klocka
    setTimeout(startTime, 1000);
}
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;   // om värdet av sekunder och minuter är mindre än 10 så sätter den en 0:a innan den ensamma siffran.
}
const dd = new Date();
document.getElementById('dagnr').innerHTML = dd.getDate();


const manadsNamn = ["Januari", "Februari", "Mars", "April", "Maj",      
"Juni", "Juli", "Augusti", "September", "Oktober", "November", "December" ];  // Array med månader 

const M = new Date(); 
document.getElementById('manad').innerHTML = manadsNamn[M.getMonth()]; 
//här skriver den ut månaden på box 3.


const dag = [ "Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag",]
const d = new Date();
document.getElementById('veckodag').innerHTML = dag[d.getDay()];  // Den här skriver ut vilken dag det är i den nedersta boxen.

today = new Date();
var veckor = new Date(today.getFullYear(),0,1);
var numberOfDays = Math.floor((today - veckor) / (24 * 60 * 60 * 1000));
var result = Math.ceil((numberOfDays) / 7); 
document.getElementById('veckor').innerHTML = result; // Skriver ut vecko nummret 



