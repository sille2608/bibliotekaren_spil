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
    document.querySelector("#mission").classList.remove("show");

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

let points = 0;
let life = 3;

function clickCorrect() {
    console.log("clickCorrect")

    this.classList.remove("foer_klik");
    this.classList.add("efter_klik");

    //scaling
    console.log(this);
    this.classList.add("scaling");

    //giv point
    points++;
    console.log(points);
    document.querySelector("#points").innerHTML = "points: " + points;

    //her kalder man på gamestatus så den kan undersøge hver gang hvor mange point der er
    gameStatus();

}

function clickWrong() {
    console.log("clickWrong")

    this.classList.remove("foer_klik");
    this.classList.add("efter_klik");

    //mister liv
    life--;
    document.querySelector("#energy").innerHTML = "life: " + life;
    console.log(life);

    //rotating
    console.log(this);
    this.classList.add("rotation");

    gameStatus();

}


//denne her der skal vurdere om vi har liv tilbage eller mere tid tilbage
function gameStatus() {

    //her definere man hvornår man dør, når der er x antal liv tilbage
    if (life <= 0) {
        gameOver();
    }

    //her definere man hvornår man vinder, når der er x antal point
    //NOTE: DET VED JEG IKKE LIGE

}


function levelComplete() {
    console.log("levelComplete")

    //vis game win skærm
    document.querySelector("#levelcomplete").classList.add("show");

    //vis menu knap

    //start animation på replay knap
    //NOTE: DET VED JEG IKKE LIGE
}

function gameOver() {
    console.log("gameOver")

    //vis game over skærm
    document.querySelector("#gameover").classList.add("show");
    document.querySelector("#menu_knap").classList.add("show");
    document.querySelector("#spil_igen_knap").classList.add("show");

    //start animation på replay knap
    //NOTE: DET VED JEG IKKE LIGE
}
