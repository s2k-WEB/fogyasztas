var km = "";

do {
    km = prompt("Hány kilométert mentél ?");
} while(!isNumber(km));

if (km <= 1000) {
    window.onload = function() {
        document.getElementById("fogyi").innerHTML = `Fogyasztás: ${km} km.`;
    };

}

function isNumber(value) {
    var pattern = /^[0-9]+$/;
    return pattern.test(value);
}
