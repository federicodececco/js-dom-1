




function fiatLux() {
    let trigger = document.getElementById('ima')
    let validation = trigger.classList.contains("check");
    let bd = document.body;
    if (validation) {
        trigger.classList.remove("check")
        trigger.classList.add("checkers")
        bd.classList.remove("dark")
        bd.classList.add("light")
        trigger.src = './img/yellow_lamp.png'
        document.getElementById("btn-primary").innerHTML = "Spegni";
    }
    else {
        trigger.classList.add("check")
        trigger.classList.remove("checkers")
        bd.classList.add("dark")
        bd.classList.remove("light")
        trigger.src = './img/white_lamp.png'
        document.getElementById("btn-primary").innerHTML = "Accendi";
    }



}