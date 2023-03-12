const setup = () => {
    let submit = document.getElementById("submit");
    let input = document.getElementById("input");
    submit.addEventListener("click",() => {maakMetSpaties(input)});
}
const maakMetSpaties= (tekst) => {
    let input = tekst.value;
    let output ="";
    for(let i=0; i<input.length; i++) {
        output +=input.charAt(i);
        output+= " ";
    }
    console.log(output);
}

window.addEventListener("load", setup);