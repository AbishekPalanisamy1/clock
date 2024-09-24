var today = new Date();

console.log(today);

var monthh=today.getMonth();
console.log(monthh)

var dayOfMonth = today.getDate();

var month=today.getMonth();

console.log(month)

var year=today.getFullYear();

var hour=today.getHours();

var min=today.getMinutes();

var sec=today.getSeconds();

var day=today.getDay();

var am=hour<12;

document.getElementById("date").textContent =dayOfMonth;

document.getElementById("year").textContent=year;

document.getElementById("month").textContent=month+1;


document.getElementById("hour").textContent=hour;

document.getElementById("min").textContent=min;

document.getElementById("sec").textContent=sec;

if(am)
{
    document.getElementById("am").style.color = "red";
    document.getElementById("pm").style.color = "";
}

else {
    document.getElementById("pm").style.color = "red";
    document.getElementById("am").style.color = ""; 
}

var days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
days.forEach(function(day) {
    document.getElementById(day).style.color = "";
});

document.getElementById(days[day]).style.color = "red";


function updateClock() {
    var now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    
    
    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;
    sec = (sec < 10 ? "0" : "") + sec;
    
    document.getElementById('hour').innerHTML = hour ;
    document.getElementById('min').innerHTML = min ;
    document.getElementById('sec').innerHTML = sec;
}


setInterval(updateClock, 1000);
