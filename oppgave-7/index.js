const blaa = document.querySelector("#blaa");
const oransje = document.querySelector("#oransje");

function endreFarge(evt){

    const knapp = evt.target;

    if (knapp.id === "blaa"){
        document.body.style.backgroundColor = "blue";
    } else if(knapp.id === "oransje") {
        document.body.style.backgroundColor = "orange";
    }
}

blaa.addEventListener("click",endreFarge);
oransje.addEventListener("click",endreFarge);