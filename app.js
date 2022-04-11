const red = document.querySelector(".red")
const yellow = document.querySelector(".yellow")
const green = document.querySelector(".green");
const damas = document.querySelector(".damas");
const zapa = document.querySelector(".zapa");
const man = document.querySelector(".man")

function timeOut() {

    setTimeout(() => {
        red.classList.add("ared")
        yellow.classList.remove("ayellow");
        green.classList.remove("agreen")
        yellow.classList.remove("black")
        damas.classList.remove("damasGM");
        zapa.classList.remove("zapas");
        man.classList.add("man2")

    },1000);

    setTimeout(() => {
        red.classList.remove("ared")
        yellow.classList.add("ayellow");
        yellow.classList.remove("black")
        damas.classList.remove("damasGM");
        zapa.classList.remove("zapas");
        man.classList.remove("man2")
    },6000)

    setTimeout(() => {
        red.classList.remove("ared")
        yellow.classList.remove("ayellow")
        // green.classList.add("black")
        damas.classList.remove("damasGM");
        zapa.classList.remove("zapas");
        man.classList.remove("man2")

    },6500)
    setTimeout(() => {
        red.classList.remove("ared")
        yellow.classList.add("ayellow")
        green.classList.remove("black")
        damas.classList.remove("damasGM");
        zapa.classList.remove("zapas");
        man.classList.remove("man2")

    },7000)
    setTimeout(() => {
        red.classList.remove("ared")
        yellow.classList.remove("ayellow")
        // green.classList.add("black")
        damas.classList.remove("damasGM");
        zapa.classList.remove("zapas");
        man.classList.remove("man2")

    },7500)
    setTimeout(() => {
        red.classList.remove("ared")
        yellow.classList.remove("ayellow")
        // green.classList.add("black")
        damas.classList.remove("damasGM");
        zapa.classList.remove("zapas");
        man.classList.remove("man2")

    },8000)
    setTimeout(() => {
        red.classList.remove("ared")
        yellow.classList.add("ayellow")
        green.classList.remove("black")
        damas.classList.remove("damasGM");
        zapa.classList.remove("zapas");
        man.classList.remove("man2")

    },8500)
    setTimeout(() => {
        red.classList.remove("ared")
        yellow.classList.remove("ayellow");
        green.classList.add("agreen");
        damas.classList.add("damasGM");
        zapa.classList.add("zapas");
        man.classList.remove("man2")

    },9000)

}
timeOut();

setInterval(() => {
    timeOut();
}, 15000);