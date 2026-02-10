const PI = 3.14;
const G = 6.6743*10**-11

function getOrbitPeriod() {
    let radius = parseFloat(document.getElementById("input-radius").value);
    let mass = parseFloat(document.getElementById("input-mass").value);
    let period = Math.sqrt((4 * PI ** 2 * radius ** 3)/(G*mass));

    let output = `The period/time is ${period}`;
    document.getElementById("result-period").innerText = output;
}