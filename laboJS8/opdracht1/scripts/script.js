const setup = () => {
    let verjaardag = new Date('2004-01-23');
    berekenDagen(verjaardag);
}

const berekenDagen = (dag) => {
    let verjaardag = new Date(dag);
    let vandaag = new Date();
    let aantalMs = vandaag-verjaardag;
    let aantalDagen = aantalMs / (1000 * 3600 * 24);
    console.log("aantal dagen " +Math.round(aantalDagen));
}

window.addEventListener("load", setup);