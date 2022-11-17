function sonyPick() {
    Cookies.set(`selection`, `sony`);
    location.href = "selection.html";
}

function sonosPick() {
    Cookies.set(`selection`, `sonos`);
    location.href = "selection.html";
}

function bosePick() {
    Cookies.set(`selection`, `bose`);
location.href = "selection.html";
    }

let pick1 = `sony`;
let pick2 = `sonos`;
let pick3 = `bose`;

document.getElementById(`sony`).addEventListener(`click`, sonyPick);
document.getElementById(`sonos`).addEventListener(`click`, sonosPick);
document.getElementById(`bose`).addEventListener(`click`, bosePick);

function noneSelected() {
    document.getElementByID(`goChoose`).addEventListener(`click`, goChoose);
    console.log(`selection`);
}



/////////////////////////////////////////////////////////////// STUCK HERE

//     This selection.html page should read the cookie with the users selection to get the selection from the page before

// If the selection cookie is not set, the page should give a message to the user informing them to go make a selection
