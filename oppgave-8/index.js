const inpFravaer = prompt("Hvor mange timer fravær har du?");
const fravaer = Number(inpFravaer);
const timetall = 140;

function sjekkStatusFravaergrense(f) {
    const grense = (fravaer/timetall)*100;
    
    if (grense >= 10) {
        document.write("Fraværet ditt ligger over grensa")
    } else {
        document.write("Fraværet ditt ligger under grensa")
    }
}

sjekkStatusFravaergrense(fravaer);
