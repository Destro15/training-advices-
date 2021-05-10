console.log("elo!");

let przycisk = document.querySelector(".przycisk");
let Podstawy = document.querySelector(".Podstawy");
przycisk.addEventListener("click", () => { Podstawy.remove(); });

console.log(przycisk);

let day = "poniedziałek";      //oj byczku oby do weekendu

switch (day) {
    case "poniedziałek":
    case "wtorek":
        console.log("rozpoczyna się tydzień");
        break;

    case "środa":
    case "czwartek":
    case "piątek":
        console.log("niedługo weekend");
        break;

    default:
        console.log("jest weekend");
}