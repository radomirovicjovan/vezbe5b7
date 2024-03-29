//prvi tip IZVRSNA

function menjanjeBoje(boja){
    let obrisiDugmad = document.getElementsByClassName("obrisi");
    for (const dugme of obrisiDugmad) {
        dugme.style.backgroundColor = boja;
    }
}
// menjanjeBoje("green");

//drugi tip ARROW

let menjanjeBojeA = (boja)=>{
    let obrisiDugmad = document.getElementsByClassName("obrisi");
    for (const dugme of obrisiDugmad) {
        dugme.style.backgroundColor = boja;
    }
}
// menjanjeBojeA("blue");

let menjanjeBojeB = (boja)=>Array.from(document.getElementsByClassName("obrisi")).forEach(dugme=>dugme.style.backgroundColor = boja);
menjanjeBojeB("purple");

//treci tip CALLBACK

let obrisiDugmad = document.getElementsByClassName("obrisi");
for (const dugme of obrisiDugmad) {
    dugme.addEventListener("click", function(e){
        console.log(this);
        console.log(this.parentNode);
        let elementZaBrisanje = this.parentNode;
        //elementZaBrisanje.remove();
        document.getElementById("lista").removeChild(elementZaBrisanje)
    });
}

// function obrisiRed(){
//     this.parentNode.remove();
// }

// for (const dugme of obrisiDugmad) {
//     dugme.addEventListener("click", obrisiRed);
// }

function dodavanjeDestinacije(event){
    event.preventDefault();
    let inputPolje = document.querySelector("#dodaj-destinaciju input");
    let novaDestinacija = inputPolje.value;
    if(novaDestinacija){
        let ul = document.getElementById("lista");
        let novoLi = document.createElement("li");
        novoLi.innerHTML = `<span class="naziv">${novaDestinacija}</span>
        <span class="obrisi">obriši</span>`;
        ul.appendChild(novoLi);
        inputPolje.value = "";
    }
}

function dodajCallBack(){
    let forma = document.forms["dodaj-destinaciju"];
    forma.addEventListener("submit", dodavanjeDestinacije);
}
dodajCallBack();

document.addEventListener("DOMContentLoaded", dodajCallBack);