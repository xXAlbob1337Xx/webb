

//-------------Tid-----------------------------------------------------------------------------------

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('tid').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // Lägger till en 0 om siffran är mindre än 10
  return i;
}

//--------------Veckor--------------------------------------------------------------------------------------

today = new Date();
var veckor = new Date(today.getFullYear(),0,1);
var numberOfDays = Math.floor((today - veckor) / (24 * 60 * 60 * 1000));   // Dygn timmar minuter sekundrar
var result = Math.ceil((numberOfDays) / 7); 
document.getElementById('veckor').innerHTML =  "Week" +' '+ result; // Skriver ut vecko nummret 


var manadsNamn = ["January", "February", "Mars", "April", "May",      
"June", "July", "August", "September", "October", "November", "December" ];  // Array med månader 
var M = new Date(); 
document.getElementById('manad').innerHTML = manadsNamn[M.getMonth()]; 
//här skriver den ut månaden i box2



var ar = new Date();
document.getElementById('ar').innerHTML = ar.getFullYear();
//tar fram år

//------------------Tar fram första dagen i månaden-----------------------------------------------------------------

var element = document.getElementById('element')

//------------------Fixar fram dagarna innan som syns på månaden som börjar------------------------------------------------------------------------------------------

var date = new Date(), y = date.getFullYear(), m = date.getMonth();
var firstDay = new Date(y, m, 1).toString();
var Lastmonth = getDaysInMonth(ar.getFullYear(), M.getMonth());
slicedDays= firstDay.slice(0, 3)
weekday = null

if(slicedDays == "Tue"){
  weekday = 1             //Den tar firstDay där den tar ut dem tre första bokstäverna i strängen den ger och 
}
if(slicedDays == "Wen"){
  weekday = 2
}
if(slicedDays == "Thu"){
  weekday = 3
}
if(slicedDays == "Fri"){
  weekday = 4
}
if(slicedDays == "Sat"){
  weekday = 5
}
if(slicedDays == "Sun"){
  weekday = 6 
}                         // Tar fram vilken dag som månaden börjar på.



for (let i = 1; i < weekday+1; i++){
  firstdays = Lastmonth - weekday + i //kolla genom
  const newp = document.createElement("p");
  newp.classList.add("weekly")
  newp.setAttribute("id", "weekday" + firstdays);
  newp.append(firstdays);
  element.appendChild(newp);

}


//------------------Fixar rätt antal dagar på en månad-----------------------------

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

var daysInMonth = getDaysInMonth(ar.getFullYear(), M.getMonth()+1);

for (let i = 1; i < daysInMonth+1; i++){
  var newp = document.createElement("p");
  newp.setAttribute("id", "day" + i);
  if((i + weekday) % 7 == 0)    //måste kolla
    newp.setAttribute("class", "red");
  newp.append(i);
  element.appendChild(newp);
}


//-------------------ändrar utseende på markören som visar datum--------------------------------------------------------------
var dd = new Date().getDate(); 
document.getElementById('day' + dd).style.background = "rgb(122, 136, 180)";
document.getElementById('day' + dd).style.color = "white";
document.getElementById('day' + dd).style.padding = "10px";
document.getElementById('day' + dd).style.borderRadius = "30px";
document.getElementById('day' + dd).style.border = "1px solid white";
document.getElementById('day' + dd).style.outline = "3px solid rgb(122, 136, 180)";




  






