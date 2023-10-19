var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var Watch = false;

function Start(){
    Watch = true;
    stopwatch();
}

function Stop(){
    Watch = false;
}

function Reset(){
    Watch = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    document.getElementById("hour").innerHTML = "00";
    document.getElementById("mint").innerHTML = "00";
    document.getElementById("secnd").innerHTML = "00";
    document.getElementById("counter").innerHTML = "00";

}

function stopwatch(){
    if(Watch == true){
        count = count +1

    if(count == 100){
        sec = sec +1;
       count = 0;
    }
    if (sec == 60){
        min = min +1;
        sec = 0;
    }
    if(min == 60){
        hr = hr +1;
        min = 0;
        sec = 0;
    }

    var hrstring = hr;
    var minstring = min;
    var secstring = sec;
    var countstring = count;

    if(hr < 10){
        hrstring = "0" + hrstring
    }

    if(min < 10){
        minstring = "0" + minstring
    }

    if(sec < 10){
        secstring = "0" + secstring
    }

    if(count < 10){
        countstring = "0" + countstring
    }

    document.getElementById("hour").innerHTML = hrstring;
    document.getElementById("mint").innerHTML = minstring;
    document.getElementById("secnd").innerHTML = secstring;
    document.getElementById("counter").innerHTML = countstring;


    setTimeout ("stopwatch ()" , 10);
  }
}
