




function fiatLux() {
    let trigger = document.getElementById('ima')
    let validation = trigger.classList.contains("check");
    if (validation) {
        trigger.classList.remove("check")
        trigger.src = './img/yellow_lamp.png'
    }
    else {
        trigger.classList.add("check")
        trigger.src = './img/white_lamp.png'
    }



}