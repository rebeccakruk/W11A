let selection = Cookies.get(`selection`);
if(selection !=undefined){
    document.getElementById(`choice`).innerText=Cookies.get(`selection`);
} else {
    document.getElementById(`choice`).innerHTML=`<a href="index.html">Go make a selection!</a>`;
}