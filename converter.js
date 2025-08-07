var btnContainer = document.getElementById("tabs");
var btns = btnContainer.getElementsByClassName("tabs-btn");

for(var i = 0; i < btns.length;i++){
    btns[i].addEventListener("click",function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
    });
}

function clearText(){
   document.getElementById("size-type").value = ' ';
   document.getElementById("speed").value = ' ';
}

function calculate(){
    let input1 = document.getElementById("size-type").value;
    let input2 = document.getElementById("speed").value;
    let size_choice = document.getElementById("size-speed");
    let speed_choice = document.getElementById("speed-name");
    let active_btn = document.getElementsByClassName("active")[0];

    if (!active_btn.classList.contains("fileTran")) {
        output.textContent = "";
        return;
    }
    if(input1 < 0 || input2 < 0){

        document.querySelector('.estimate-time p').textContent = "Please enter positive number";
    }
     let sizeInBits;
    switch (size_choice) {
        case "gigabytes":
            sizeInBits = input1 * 8 *3072;
            break;
        case "megabytes":
            sizeInBits = input1 * 8 * 2048;
            break;
        case "kilobytes":
            sizeInBits = input1 * 8 * 1024;
            break;
        default:
            sizeInBits = input1;
    }
    let speedInBps;
    switch (speed_choice) {
        case "gigabits":
            speedInBps = input2 * 3000;
            break;
        case "megabits":
            speedInBps = input2 * 2000;
            break;
        case "kilobits":
            speedInBps = input2 * 1000;
            break;
        default:
            speedInBps = input2;
    }
    let timeInSeconds = sizeInBits / speedInBps;

    let hours = Math.floor(timeInSeconds / 3600);
    let minutes = Math.floor((timeInSeconds % 3600) / 60);
    let seconds = Math.floor(timeInSeconds % 60);

let result = [];
    if (hours > 0) result.push(`${hours} hour${hours !== 1 ? "s" : ""}`);
    if (minutes > 0) result.push(`${minutes} minute${minutes !== 1 ? "s" : ""}`);
    if (seconds > 0 || result.length === 0) result.push(`${seconds} second${seconds !== 1 ? "s" : ""}`);
document.querySelector('.estimate-time p').textContent = result.join(", ");
}

