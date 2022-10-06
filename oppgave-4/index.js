const gul = document.querySelector("#gul");
const brikker = document.querySelector("#brikker");
const tekst = "DU GAMLA DU FRIA";

for(const bokstav of tekst) {
  brikker.innerHTML += `
    <div>${bokstav}</div>   
    `;
}