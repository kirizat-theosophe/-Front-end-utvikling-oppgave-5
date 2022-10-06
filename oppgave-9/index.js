const tallene = [20, 31, 9, 4, 32, 43, 12, 4, 13];

let sum = 0;

for(const tall of tallene) {
    sum += tall; 
}

document.write("Summen av tallene i arrayet er " + sum);

for(let i=0; i<tallene.length; i++) {
    const tall = tallene[i];
    if(tall > 20) {
        document.write("<br> " + tall + " er større enn 20 ");
    }
}

document.write("<br> Det største tallet i arrayet er " + Math.max(...tallene));