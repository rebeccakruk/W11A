// Cookies.set(`selection`, `true`);

function sonyPick(){
    Cookies.set(`selection`, `sony`);
    // let pick1 = `sony`;
    if(pick1 == `sony`){
        // let button = Cookies.get(`selection`, `pick1`)
        document.getElementById(`sony`).addEventListener(`click`, location.href="selection.html");
    }
}

// // document.getElementById(`choiceMade`).addEventListener(`mouseover`, `${`selection`}`)

function sonosPick(){
    Cookies.set(`selection`, `sonos`);
    // let pick2 = `sonos`;
    if(pick2 == `sonos`);{
        document.getElementById(`sonos`).addEventListener(`click`, location.href="selection.html");
}
}

function bosePick(){
    Cookies.set(`selection`, `bose`);
    // let pick3 = `bose`;
    if(pick3 == `bose`){
    document.getElementById(`bose`).addEventListener(`click`, location.href="selection.html");
    document.getElementById(`loginButton`).addEventListener(`mouseover`, bosePage);
} 
}

function bosePage(bosePick){
    if(event.NONE)
    console.log(`gsarglksaj`);
}

let pick1 = (`sony`);
let pick2 = (`sonos`);
let pick3 = (`bose`);


document.getElementById(`sony`).addEventListener(`click`, sonyPick);
document.getElementById(`sonos`).addEventListener(`click`, sonosPick);
document.getElementById(`bose`).addEventListener(`click`, bosePick);

/////////////////////////////////////////////////////////////// STUCK HERE

//     This selection.html page should read the cookie with the users selection to get the selection from the page before

// If the selection cookie is not set, the page should give a message to the user informing them to go make a selection
