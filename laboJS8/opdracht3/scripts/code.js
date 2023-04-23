let personen = [];
let bestaandPersoon = false;

const bewaarBewerktePersoon = () => {
    let persoon;
    if(valideer()) {
        persoon = {
            voornaam: document.getElementById("txtVoornaam").value,
            familienaam: document.getElementById("txtFamilienaam").value,
            geboorteDatum: document.getElementById("txtGeboorteDatum").value,
            email: document.getElementById("txtEmail").value,
            aantalKinderen: document.getElementById("txtAantalKinderen").value

        }
        if(!bestaandPersoon) {
            nieuwPersoonToevoegen(persoon);
        }
    }
};

const nieuwPersoonToevoegen= (persoon) => {
    personen.push(persoon);
    lijstPersoon(persoon);
}

const persoonAanpassen = (event) => {
    if(bestaandPersoon) {
        let id = event.currentTarget.id;
        let persoon = {
            voornaam: document.getElementById("txtVoornaam").value,
            familienaam: document.getElementById("txtFamilienaam").value,
            geboorteDatum: document.getElementById("txtGeboorteDatum").value,
            email: document.getElementById("txtEmail").value,
            aantalKinderen: document.getElementById("txtAantalKinderen").value
        }
        personen[id]= persoon;
        let select = document.getElementById("lstPersonen");
        let option = select.children[id];
        option.innerText = persoon.voornaam + " " + persoon.familienaam;
    }


}

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
    let form = document.getElementById('form');
    form.reset();
    bestaandPersoon = false;
};

const lijstPersoon = (persoon) => {
    let select = document.getElementById("lstPersonen");
    let option = document.createElement("option");
    option.innerText = persoon.voornaam + " " + persoon.familienaam;
    option.id = personen.length;
    option.addEventListener("click",toonGegevens);
    select.appendChild(option);
    personen[personen.length] = persoon;
}

const toonGegevens = (event) => {
        let id = event.target.id;
        let btnBewaar = document.getElementById("btnBewaar");
        btnBewaar.addEventListener("click", persoonAanpassen);
        document.getElementById("txtVoornaam").value = personen[id].voornaam;
        document.getElementById("txtFamilienaam").value = personen[id].familienaam;
        document.getElementById("txtGeboorteDatum").value = personen[id].geboorteDatum;
        document.getElementById("txtEmail").value = personen[id].email;
        document.getElementById("txtAantalKinderen").value = personen[id].aantalKinderen;
        bestaandPersoon = true;
}


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");

};

window.addEventListener("load", setup);