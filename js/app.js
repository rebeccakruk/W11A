Cookies.set(`selection`, `true`);

console.log(`selection`);

function sonyPick(){
    document.getElementById(`sony`).addEventListener(`click`, location.href="selection.html");
    // document.button.insertAdjacentHTML(`beforebegin`,`<h3>Can't beat Sony sound for the price!</h3>`);
    /////////////////////////////// CAN'T SET THE COOKIES
    let sony = Cookies.set(`sony`);
    console.log(`sony`);
}
function sonosPick(){
    document.getElementById(`sonos`).addEventListener(`click`, location.href="selection.html");
    let sonos = Cookies.get(`sonos`);

}
function bosePick(){
    // Cookies.get(`selection`);
    document.getElementById(`bose`).addEventListener(`click`, location.href="selection.html");

}
document.getElementById(`sony`).addEventListener(`click`, sonyPick);
document.getElementById(`sonos`).addEventListener(`click`, sonosPick);
document.getElementById(`bose`).addEventListener(`click`, bosePick);

/////////////////////////////////////////////////////////////// STUCK HERE

//     This selection.html page should read the cookie with the users selection to get the selection from the page before

// If the selection cookie is not set, the page should give a message to the user informing them to go make a selection





/////////////////////////////////////////////////////////    THIS DOESN'T WORK


let faveSound = Cookies.get(`selection`);
// function bestSound (){
//     if(faveSound == `sony`){
//         document.getElementById(`sony`).addEventListener(`click`, location.href="selection.html");
        //     } else if (faveSound == `sonos`){
        //         document.getElementById(`sonos`).addEventListener(`click`, location.href="selection.html");
        //     } else if (faveSound == `bose`){
                //         document.getElementById(`bose`).addEventListener(`click`, location.href="selection.html");
                //     } else (console.log(` dyfuh`))
                // }
                // if(faveSound !=undefined){
                    //     document.getElementById(`sony`).innerText = `Hello ${Selection}`;
                    // }
                    
// document.getElementById(`sony`).addEventListener(`click`, bestSound);