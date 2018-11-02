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

    //klik for at komme til mission skærm
    document.querySelector("#play").addEventListener("click", hideStart);

    //klik for at komme til setting skærm
    document.querySelector("#settings_buttom").addEventListener("click", showSetting);
}

function showSetting() {
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

    //bøgerne der kan klikkes på, sættes ind og aktiveres
    document.querySelector("#bog_sommerfugl").classList.add("foer_klik");
    document.querySelector("#bog_sol").classList.add("foer_klik");
    document.querySelector("#bog_hund").classList.add("foer_klik");
    document.querySelector("#bog_elefant").classList.add("foer_klik");

    document.querySelector("#bog_gris").classList.add("foer_klik");
    document.querySelector("#bog_faar").classList.add("foer_klik");
    document.querySelector("#bog_ko").classList.add("foer_klik");
    document.querySelector("#bog_kat").classList.add("foer_klik");


    //fade startskærm ud
    document.querySelector("#start").classList.add("fade_out");

    //siden sendes videre til show mission
    document.querySelector("#start").addEventListener("animationend", showMission);

}

function showMission() {
    console.log("showMission");

    //skjul startskærm
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#start").classList.remove("show");

    //vis spilskærm
    document.querySelector("#game_background").classList.add("show");

    //vis talebobel med spillets regler
    document.querySelector("#mission").classList.add("show");

    //vis mission play knappen
    document.querySelector("#mission_play").classList.add("show");


    //start animation på play knappen
    document.querySelector("#mission_play").classList.add("pulse");


    //Klik til spil start
    document.querySelector("#mission_play").addEventListener("click", hideMission);

}


function hideMission() {
    console.log("hideMission");

    //stop animation på start spil knappen
    document.querySelector("#mission_play").classList.remove("pulse");

    //fade out Mission-talebobbel
    document.querySelector("#mission").classList.add("fade_out");

    //skjul Mission-talebobbel
    document.querySelector("#mission").classList.add("hide");

    //skjul mission play knap
    document.querySelector("#mission_play").classList.remove("show");

    //når skjul Mission-talebobbel er færdig -startGame
    document.querySelector("#mission").addEventListener("animationend", startGame);
}


function startGame() {
    console.log("startGame");

    //start tiden
    //NOTE: DET VED JEG IKKE LIGE

    // start animation på ur-viseren
    document.querySelector("#time").classList.add("time_rotation");

    //aktiver at der kan klikkes på bøgerne
    document.querySelector("#bog_sommerfugl").addEventListener("click", clickWrong);
    document.querySelector("#bog_sol").addEventListener("click", clickWrong);
    document.querySelector("#bog_hund").addEventListener("click", clickWrong);
    document.querySelector("#bog_elefant").addEventListener("click", clickWrong);

    document.querySelector("#bog_gris").addEventListener("click", clickCorrect);
    document.querySelector("#bog_faar").addEventListener("click", clickCorrect);
    document.querySelector("#bog_ko").addEventListener("click", clickCorrect);
    document.querySelector("#bog_kat").addEventListener("click", clickCorrect);


}

function clickCorrect() {
    console.log("clickCorrect")

    this.classList.remove("foer_klik");
    this.classList.add("efter_klik");

    //vis grøn bog
    //NOTE: DET VED JEG IKKE LIGE

    //scaling
    //NOTE: DET VED JEG IKKE LIGE

    //giv point
    //NOTE: DET VED JEG IKKE LIGE
}

function clickWrong() {
    console.log("clickWrong")

    this.classList.remove("foer_klik");
    this.classList.add("efter_klik");

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
