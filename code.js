function playCraps() {
    console.log("playCraps() function Started");
    var die1 = Math.ceil(Math.random() * 6);    //pick a random number between 0 to 1, multiply by 6 and round up to the nearest higher whole number, store as die1
    var die2 = Math.ceil(Math.random() * 6);
    var sum = die1 + die2;
    document.getElementById("die1Res").innerHTML = "Die 1 = " + die1;
    document.getElementById("die2Res").innerHTML = "Die 2 = " + die2;
    document.getElementById("sumRes").innerHTML = "Sum = " + sum;
    if (sum == 7 || sum == 11) {
        loss = loss + 1;
        document.getElementById("lossRes").innerHTML = loss;
        document.getElementById("finalRes").innerHTML = "CRAPS - you lose!";
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        wins++;
        document.getElementById("winRes").innerHTML = wins;
        document.getElementById("finalRes").innerHTML = "DOUBLES - you win";
    } else {
        tie++;
        document.getElementById("tieRes").innerHTML = tie;
        document.getElementById("finalRes").innerHTML =
            "Draw - You neither won nor lost. Please try again.";
    }

}

function blastOff() {
    var currTime = 10;
    document.getElementById("countDownTimer").innerHTML = currTime;
    setTimeout(function () {
        currTime = currTime - 2;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 2000);
    setTimeout(function () {
        currTime = currTime - 2;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 4000);
    setTimeout(function () {
        currTime = currTime - 2;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 6000);
    setTimeout(function () {
        currTime = currTime - 2;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 8000);
    setTimeout(function () {
        currTime = currTime - 2;
        document.getElementById("countDownTimer").innerHTML = "Blastoff!";
    }, 10000);
}

function btrBlastOff() {
    console.log("btrBlastOff() started");
    var currTime = 20;
    for (var i = 0; i < 11; i++) {
        setTimeout(function () {
            if (currTime >= 10) {
                //if conditions are true
                document.getElementById("countDownTimer").innerHTML = currTime;
            } else if (currTime == 0) {
                //if else if conditions are true
                document.getElementById("countDownTimer").innerHTML = "Blastoff!";
            } else {
                //if conditions are not true
                document.getElementById("countDownTimer").innerHTML =
                    "Warning Less than ½ way to launch, time left = " + currTime;
            }
            currTime = currTime - 2;
        }, i * 2000);
    }
}

function start() {
    console.log("start() function started");
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stop() {
    console.log("stop() function started");
    clearInterval(timer);
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

function getData(){
    var loadedData = loadData();
    return loadedData;
}

function dataRow(legend, value, units){
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}

//function to update the display
function updateDisplay() {
    theTime = new Date();
    console.log("The time is: " + theTime.getHours() + ":"
        + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + ":"
        + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds()));

    var timeRead = data[index].time_seconds;

    if (timeRead >= 10) {
        document.getElementById("data").rows["seconds"].innerHTML =
            dataRow("Time Elapsed", data[index].time_seconds, "seconds");
        document.getElementById("data").rows["latitude"].innerHTML =
            dataRow("Latitude", data[index].latitude, " ");
        document.getElementById("data").rows["longitude"].innerHTML =
            dataRow("Longitude", data[index].longitude, " ");
        document.getElementById("data").rows["gpsSensor_alt"].innerHTML =
            dataRow("GPS altitude", data[index].gps_altitude, " ");
        document.getElementById("data").rows["bmpSensor_alt"].innerHTML =
            dataRow("BMP altitude", data[index].bmpSensor_altitude, " ");
        document.getElementById("data").rows["bmpSensor_pres"].innerHTML =
            dataRow("BMP pressure", data[index].bmpSensor_pressure, " ");
        document.getElementById("data").rows["bmpSensor_temp"].innerHTML =
            dataRow("BMP temp", data[index].bmpSensor_temp, " ");
        document.getElementById("data").rows["digSensor_temp"].innerHTML =
            dataRow("Dig temp", data[index].digSensor_temp, " ");
        document.getElementById("data").rows["cssSensor_temp"].innerHTML =
            dataRow("CSS temp", data[index].cssSensor_temp, " ");
        document.getElementById("data").rows["cssSensor_eCO2"].innerHTML =
            dataRow("CSS eCO2", data[index].cssSensor_eCO2, " ");
        document.getElementById("data").rows["cssSensor_TVOC"].innerHTML =
            dataRow("CSS TVOC", data[index].cssSensor_TVOC, " ");
        document.getElementById("data").rows["UV"].innerHTML =
            dataRow("UV", data[index].UV, " ");
        document.getElementById("data").rows["accelX"].innerHTML =
            dataRow("accelX", data[index].accelX, " ");
        document.getElementById("data").rows["accelY"].innerHTML =
            dataRow("accelY", data[index].accelY, " ");
        document.getElementById("data").rows["accelZ"].innerHTML =
            dataRow("accelZ", data[index].accelZ, " ");
        document.getElementById("data").rows["magneticX"].innerHTML =
            dataRow("magneticX", data[index].magneticX, " ");
        document.getElementById("data").rows["magneticY"].innerHTML =
            dataRow("magneticY", data[index].magneticY, " ");
        document.getElementById("data").rows["magneticZ"].innerHTML =
            dataRow("magneticZ", data[index].magneticZ, " ");
        document.getElementById("data").rows["gyroX"].innerHTML =
            dataRow("gyroX", data[index].gyroX, " ");
        document.getElementById("data").rows["gyroY"].innerHTML =
            dataRow("gyroY", data[index].gyroY, " ");
        document.getElementById("data").rows["gyroZ"].innerHTML =
            dataRow("gyroZ", data[index].gyroZ, " ");
        document.getElementById("timeClock").innerHTML = "The time is: " + theTime.getHours() + ":"
            + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + ":"
            + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds());

        if (index < 500) {
            index++;
        } else {
            index = 0;
        }

    }
}

function playStation() {
    console.log("playStation() started");
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}

function sound(srcFile) {
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    //this.sound.setAttribute("preload", "audio");
    //this.sound.setAttribute("controls", "none");
    //this.sound.style.display = "none";
    //document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}

function playBowie() {
    console.log("playBowie() started");
    mySound = new sound("David_Bowie_Space_Oddity.mp3");
    mySound.play();
}

class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ,
    ) {
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}