//alert("hej med dig");

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    //nulstil altid
    //NOTE: det ved jeg ikke lige

    //-> showstart
    showStart();
}

function showStart() {
    console.log("showStart");
    //vis startskærm
    document.querySelector("#start").classList.add("show");
    //start animation på start-knap
    document.querySelector("#play").classList.add("pulse");

    //At der kan klikkes på play
    document.querySelector("#play").addEventListener("click", hideStart);

    //At der kan klikkes på setting
    document.querySelector("#settings_bottom").addEventListener("click", showSetting);
}

function showSetting (){
    console.log("showSetting");

    //vis setting skræm
    document.querySelector("#settings").classList.add("show");

    //Klik tilbage til start
    document.querySelector("#kryds_knap").addEventListener("click", hideSetting);

}

function hideSetting() {
    console.log("hideSetting");

    //skjul setting skærm
    document.querySelector("#settings").classList.remove("show");

}

function hideStart() {
    console.log("hideStart");
    //stop animation på start-knap
    document.querySelector("#play").classList.remove("pulse");
    //fade startskærm ud
    document.querySelector("#start").classList.add("fade_out");

}

function gameScreen() {
    console.log("gameScreen");

    //skjul startskærm
    document.querySelector("#start").classList.add("hide");
    //vis spilskærm
    document.querySelector("#game").classList.add("show");



}


function gameMission() {
    console.log("gameMission");
    //vis talebobel med spillets regler
    //NOTE: DET VED JEG IKKE LIGE
}


function hideMission() {
    console.log("hideMission");
    //skjul Mission-talebobbel
    //NOTE: DET VED JEG IKKE LIGE

    //når skjul Mission-talebobbel er færdig -startGame
    document.querySelector("#start").addEventListener("animationend");
}

function startGame() {
    console.log("startGame");

    //start tiden
    //NOTE: DET VED JEG IKKE LIGE

}

function clickCorrect() {
    console.log("clickCorrect")

    //vis grøn bog
    //NOTE: DET VED JEG IKKE LIGE

    //scaling
    //NOTE: DET VED JEG IKKE LIGE

    //giv point
    //NOTE: DET VED JEG IKKE LIGE
}

function clickWrong() {
    console.log("clickWrong")

    //vis grøn bog
    //NOTE: DET VED JEG IKKE LIGE

    //scaling
    //NOTE: DET VED JEG IKKE LIGE

    //giv point
    //NOTE: DET VED JEG IKKE LIGE
}

function levelComplete() {
    console.log("levelComplete")

    //vis game win skærm
    //NOTE: DET VED JEG IKKE LIGE

    //start animation på replay knap
    //NOTE: DET VED JEG IKKE LIGE
}

function gameOver() {
    console.log("gameOver")

    //vis game over skærm
    //NOTE: DET VED JEG IKKE LIGE

    //start animation på replay knap
    //NOTE: DET VED JEG IKKE LIGE
}
