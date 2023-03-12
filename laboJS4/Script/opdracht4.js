const setup = () => {
    getAantalAn();
}

const getAantalAn = () => {
    let tekst = document.getElementById("man").textContent;
    let tekstKlein = tekst.toLowerCase();
    let count = 0;
    for (let i = 0; i < tekstKlein.length; i++) {
        if (tekstKlein.charAt(i) === 'a' && tekstKlein.charAt(i + 1) === 'n') {
            count++;
        }
    }
    console.log(count);
}
window.addEventListener("load", setup);