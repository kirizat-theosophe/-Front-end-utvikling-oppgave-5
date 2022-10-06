const liste = document.querySelector("ol");
const hester = ["Axent", "Atox", "Atlar", "Asia", "Aron"];

for(const hest of hester) {
    liste.innerHTML += `
        <li>${hest}</li> 
    `;      
}
