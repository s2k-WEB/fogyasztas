var km = "";
var tankolas = "";
var autok = {
    evjarat : "1980",
    automarka : "Saab",
    fogyaszt  : function() {
      return `${this.evjarat}-as évjáratú ${this.automarka} fogyasztása: ${(tankolas / km).toFixed(2)} liter/km.`;
    }
  };

do {
    km = prompt("Hány kilométert mentél ?");
} while(!isNumber(km) || km > 1000)

do {
    tankolas = prompt("Hány litert tankoltál ?");
} while(!isNumber(tankolas) || tankolas <= 1 || tankolas > 50)

window.onload = function() {
    var stuff = document.getElementsByTagName("body")[0];
    stuff.appendChild(document.createTextNode(`${autok.fogyaszt()}`));
    stuff.appendChild(document.createElement("br"));
    if (tankolas > 20) {
        stuff.appendChild(document.createTextNode(`Nem sajnálod az üzemanyagot !`));
        stuff.appendChild(document.createElement("br"));
    }
};

function isNumber(value) {
    var pattern = /^[0-9]+$/;
    return pattern.test(value);
}
