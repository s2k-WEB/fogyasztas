var km = "";
var tankolas = "";

var autok = {
    evjarat : "1980",
    automarka : "Saab",
    // fullName : function() {
    //   return this.firstName + " " + this.lastName;
    // }
  };

do {
    km = prompt("Hány kilométert mentél ?");
} while(!isNumber(km) || km > 1000)

do {
    tankolas = prompt("Hány litert tankoltál ?");
} while(!isNumber(tankolas) || tankolas <= 1 || tankolas > 50)






window.onload = function() {document.getElementById("fogyi").innerHTML = `Fogyasztás: ${km} km. ${tankolas}`};

// if (km <= 1000) {
//     window.onload = function() {
//         document.getElementById("fogyi").innerHTML = `Fogyasztás: ${km} km.`;
//     };
// }

function isNumber(value) {
    var pattern = /^[0-9]+$/;
    return pattern.test(value);
}
