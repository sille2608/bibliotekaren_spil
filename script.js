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

    document.querySelector("#setting_effect_sound").addEventListener("click", toggleSounds);
    document.querySelector("#setting_music").addEventListener("click", toggleMusic);

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

    //klik på setting knap i spillet
    document.querySelector("#setting_knap_spil").addEventListener("click", showSetting);

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

    //start baggrundmusik
    document.querySelector("#background_music").play();

    //vis spilskærm
    document.querySelector("#game_background").classList.add("show");

    //vis talebobel med spillets regler
    document.querySelector("#mission").classList.add("show");

    //vis mission play knappen
    document.querySelector("#mission_play").classList.add("show");


    //start animation på play knappen
    document.querySelector("#mission_play").classList.add("pulse");

    //start lyd mission_audio
    document.querySelector("#mission_audio").play();


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

    // stop lyd mission_audio
    document.querySelector("#mission_audio").muted = true;

    //*****Her skal jeg få karakteren til at rykke sig når man klikker på start knappen***//
    document.querySelector("#mission_play").classList.add("karakter_move");
}


function startGame() {
    console.log("startGame");

    // start animation på ur-viseren
    document.querySelector("#time").classList.add("time_rotation");

    //start pulse på liste_dyr
    document.querySelector("#liste_dyr").classList.add("pulse");

    //aktiver at der kan klikkes på bøgerne
    document.querySelector("#bog_sommerfugl").addEventListener("click", clickWrong);
    document.querySelector("#bog_sol").addEventListener("click", clickWrong);
    document.querySelector("#bog_hund").addEventListener("click", clickWrong);
    document.querySelector("#bog_elefant").addEventListener("click", clickWrong);

    document.querySelector("#bog_gris").addEventListener("click", clickCorrect);
    document.querySelector("#bog_faar").addEventListener("click", clickCorrect);
    document.querySelector("#bog_ko").addEventListener("click", clickCorrect);
    document.querySelector("#bog_kat").addEventListener("click", clickCorrect);

    //tiden starter
    tidenGaar();

    //karakteren skal lave sin animation
    document.querySelector("#karakteren").classList.add("karakter_look_right");


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
    document.querySelector("#points").textContent = points;

    //her kalder man på gamestatus så den kan undersøge hver gang hvor mange point der er
    gameStatus();

    //lyd correct_click_audio
    document.querySelector("#correct_click_audio").play();
    document.querySelector("#correct_click_audio").currentTime = 0;

}

function clickWrong() {
    console.log("clickWrong")

    this.classList.remove("foer_klik");
    this.classList.add("efter_klik");

    //mister liv
    life--;
    document.querySelector("#energy").textContent = life;
    console.log(life);

    //rotating
    console.log(this);
    this.classList.add("rotation");

    gameStatus();

    //lyd wrong_click_audio
    document.querySelector("#wrong_click_audio").play();
    document.querySelector("#wrong_click_audio").currentTime = 0;
}


//denne her der skal vurdere om vi har liv tilbage eller mere tid tilbage
function gameStatus() {
    console.log("gamestatus")

    //her definere man hvornår man dør, når der er x antal liv tilbage
    if (life <= 0) {
        gameOver();
    }

    //her definere man hvornår man vinder, når der er x antal point
    //NOTE: DET VED JEG IKKE LIGE

    if (points > 3) {
        levelComplete();
    }

}

function levelComplete() {
    console.log("levelComplete")

    //vis game win skærm
    document.querySelector("#levelcomplete").classList.add("show");
    //    document.querySelector("#menu_knap2").classList.add("show");
    document.querySelector("#spil_igen_knap2").classList.add("show");

    //start animation på replay knap
    document.querySelector("#spil_igen_knap2").classList.add("pulse");

    //stop tideligere lyd fra correct_click_audio
    document.querySelector("#correct_click_audio").muted = true;

    //lyd levelcomplete_audio
    document.querySelector("#levelcomplete_audio").play();

    //pause baggrundmusik
    document.querySelector("#background_music").pause();

    //Der registreres om spillet er stoppet inden
    erSpilletStoppet = true;

    //aktivere replay knappen
    document.querySelector("#spil_igen_knap2").addEventListener("click", sidenVises)


    //aktivere menu knappen
    //NOTE DET VED JEG IKKE LIGE
}

function gameOver() {
    console.log("gameOver")

    //stop animation på ur-viseren
    document.querySelector("#time").classList.remove("time_rotation");

    //vis game over skærm og knapper
    document.querySelector("#gameover").classList.add("show");
    //    document.querySelector("#menu_knap").classList.add("show");
    document.querySelector("#spil_igen_knap").classList.add("show");

    //start animation på replay knap
    document.querySelector("#spil_igen_knap").classList.add("pulse");

    //stop tideligere lyd fra wrong_click_audio
    document.querySelector("#wrong_click_audio").muted = true;
    //lyd gameover_audio
    document.querySelector("#gameover_audio").play();

    //pause baggrundmusik
    document.querySelector("#background_music").pause();

    //Der registreres om spillet er stoppet inden
    erSpilletStoppet = true;

    //aktivere replay knappen
    document.querySelector("#spil_igen_knap").addEventListener("click", sidenVises)

    //aktivere menu knappen
    //NOTE DET VED JEG IKKE LIGE

}


//***********replay og menu knap*********////





//*************tiden********************////

//bestemmer her hvad start tiden er
let timeleft = 10;


function tidenGaar() {
    console.log("tidenGaar")

    //trækker 1 fra den tid vi har defineret i starten
    timeleft--;


    //her bestemmer at hver 1 sek så skal der opsumeres hvor lang tid der er tilbage. Her skrives det i ms. Man skriver "tidenGaar" fordi den skal kalde på sig selv igen efter 1 sek. Grunden til den er i en if sætning er fordi man skal sige at hvis tiden er større end nul så skal den tælle ned og hvis tiden ikke er større end nul har man jo tabt og man går til gameover

    if (timeleft > 0) {
        setTimeout(tidenGaar, 1000);
    } else if (erSpilletStoppet == false) {

        gameOver();
    }

    console.log(timeleft);
}

//her husker man om man har haft gameOver før tiden løber ud
let erSpilletStoppet = false;

function endGame() {
    console.log("endGame");


    // hvis vi har haft game over
    if (erSpilletStoppet == true) {
        //gør ingenting
    } else {
        // Hvis der er mere ned 3 point er spillet vundet
        if (points > 3) {
            levelComplete();
        } else {
            gameOver();
        }
    }

}

//*************'musik og lyd¨****************'//


let showSettingsEffektSound = true;
let showSettingsMusic = true;


function toggleSounds() {
    console.log("toggleSounds");

    if (showSettingsEffektSound == false) {
        //her klikker vi lyden på
        showSettingsEffektSound = true;
        document.querySelector("#lydeffekter_sprite").classList.add("off_on");
        document.querySelector("#lydeffekter_sprite").classList.remove("off");
        document.querySelector("#lydeffekter_sprite").addEventListener("animationend", soundsOn);
        //        soundsOff();
    } else {
        //her kikker vi lyden af - slukker den
        showSettingsEffektSound = false;
        document.querySelector("#lydeffekter_sprite").classList.add("on_off");
        document.querySelector("#lydeffekter_sprite").classList.remove("on");
        document.querySelector("#lydeffekter_sprite").addEventListener("animationend", soundsOff);
        //        soundsOn();
    }

}

function soundsOff() {
    console.log("soundsOff function værdi er " + showSettingsEffektSound);
    document.querySelector("#lydeffekter_sprite").removeEventListener("animationend", soundsOff);
    document.querySelector("#lydeffekter_sprite").classList.remove("on_off");
    document.querySelector("#lydeffekter_sprite").classList.add("off");
    //    her slukkes for efx
    document.querySelector("#correct_click_audio").muted = true;
    document.querySelector("#wrong_click_audio").muted = true;
    document.querySelector("#mission_audio").muted = true;
    document.querySelector("#levelcomplete_audio").muted = true;
    document.querySelector("#gameover_audio").muted = true;
}

function soundsOn() {
    console.log("soundsOn function værdi er " + showSettingsEffektSound);
    document.querySelector("#lydeffekter_sprite").removeEventListener("animationend", soundsOn);
    document.querySelector("#lydeffekter_sprite").classList.remove("off_on");
    document.querySelector("#lydeffekter_sprite").classList.add("on");
    //    her tændes for efx
    document.querySelector("#correct_click_audio").muted = false;
    document.querySelector("#wrong_click_audio").muted = false;
    document.querySelector("#mission_audio").muted = false;
    document.querySelector("#levelcomplete_audio").muted = false;
    document.querySelector("#gameover_audio").muted = false;
}


function toggleMusic() {
    console.log("togglemusic");

    if (showSettingsMusic == false) {
        //her klikker vi lyden på
        showSettingsMusic = true;
        document.querySelector("#music_sprite").classList.add("off_on");
        document.querySelector("#music_sprite").classList.remove("off");
        document.querySelector("#music_sprite").addEventListener("animationend", musicOn);
        //        soundsOff();
    } else {
        //her kikker vi lyden af - slukker den
        showSettingsMusic = false;
        document.querySelector("#music_sprite").classList.add("on_off");
        document.querySelector("#music_sprite").classList.remove("on");
        document.querySelector("#music_sprite").addEventListener("animationend", musicOff);
        //        soundsOn();
    }

}


function musicOff() {
    console.log("musicOff function værdi er " + showSettingsMusic);

    document.querySelector("#music_sprite").removeEventListener("animationend", musicOff);
    document.querySelector("#music_sprite").classList.remove("on_off");
    document.querySelector("#music_sprite").classList.add("off");

    //    her slukkes for muisk
    document.querySelector("#background_music").pause();

}

function musicOn() {
    console.log("musicOn function værdi er " + showSettingsMusic);

    document.querySelector("#music_sprite").removeEventListener("animationend", musicOn);
    document.querySelector("#music_sprite").classList.remove("off_on");
    document.querySelector("#music_sprite").classList.add("on");

    //    her tændes for musik
    document.querySelector("#background_music").play();

}
