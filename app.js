
setInterval (showTime, 1000)
function showTime(){
let time = new Date();
let hour = time.getHours();
let min = time.getMinutes();
let sec = time.getSeconds();
let am_pm = "AM";

let Hours = document.querySelector(".hours");
let Seconds = document.querySelector(".seconds");
let Minutes = document.querySelector(".minutes");


if(hour > 12){
    hour -= 12; //to display in 12 hour format
    am_pm = "PM";
}

if(hour == 0){
    hr = 12;
    am_pm = "AM";
}

Hours = hour < 10 ? "0" + hour : hour;
Minutes = min < 10 ? "0" + min : min;
Seconds  = sec < 10 ? "0" + sec : sec;



// let currentTime = Hours  +":" + Minutes +":"+ Seconds;

document.getElementById('secs').innerHTML = Seconds;
document.getElementById('hour').innerHTML = Hours;
document.getElementById('mins').innerHTML = Minutes;
document.getElementById('am_pm').innerHTML = am_pm;


}

showTime();

