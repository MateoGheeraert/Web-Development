const setup = () => {
    prog1();
    prog2();
    prog3();
}

const prog1 = () => {
    let student1 = {
        voornaam : "Mateo",
        familienaam : "Gheeraert",
        geboorteDatum : new Date("2004-1-23"),
        adres : {
            straat : "Kouterstraat 77c",
            postcode : "8650",
            gemeente : "Merkem"
        },
        isIngeschreven : true,
        namenVanVrienden : ["Gert", "Octaaf", "Alberto"],
        aantalAutos : 2
    }

    let student = JSON.stringify(student1);
    console.log(student);
}

const prog2 = () => {
    let json = "{\"voornaam\":\"Mateo\",\"familienaam\":\"Gheeraert\",\"geboorteDatum\":\"2004-01-22T23:00:00.000Z\",\"adres\":{\"straat\":\"Kouterstraat 77c\",\"postcode\":\"8650\",\"gemeente\":\"Merkem\"},\"isIngeschreven\":true,\"namenVanVrienden\":[\"Gert\",\"Octaaf\",\"Alberto\"],\"aantalAutos\":2}";
    let student1 = JSON.parse(json);
    console.log(student1.voornaam);
}

const prog3 = () => {
    let student1 = {
        voornaam : "Mateo",
        familienaam : "Gheeraert",
        geboorteDatum : new Date("2004-1-23"),
        adres : {
            straat : "Kouterstraat 77c",
            postcode : "8650",
            gemeente : "Merkem"
        },
        isIngeschreven : true,
        namenVanVrienden : ["Gert", "Octaaf", "Alberto"],
        aantalAutos : 2
    }

    let json = "{\"voornaam\":\"Mateo\",\"familienaam\":\"Gheeraert\",\"geboorteDatum\":\"2004-01-22T23:00:00.000Z\",\"adres\":{\"straat\":\"Kouterstraat 77c\",\"postcode\":\"8650\",\"gemeente\":\"Merkem\"},\"isIngeschreven\":true,\"namenVanVrienden\":[\"Gert\",\"Octaaf\",\"Alberto\"],\"aantalAutos\":2}";
    let student2 = JSON.parse(json);
    if(student1 === student2) {
        console.log(true);
    } else {
        console.log(false);
    }
}


window.addEventListener("load", setup);