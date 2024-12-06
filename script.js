




function fiatLux() {
    let trigger = document.getElementById('ima')
    let validation = trigger.classList.contains("check");
    if (validation) {
        trigger.classList.remove("check")
        trigger.classList.remove("check")
        trigger.src = './img/yellow_lamp.png'
        document.getElementById("btn-primary").innerHTML = "Spegni";
    }
    else {
        trigger.classList.add("check")
        trigger.classList.remove("checkers")
        trigger.src = './img/white_lamp.png'
        document.getElementById("btn-primary").innerHTML = "Accendi";
    }



}