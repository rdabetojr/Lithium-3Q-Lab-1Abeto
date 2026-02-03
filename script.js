const PI = 3.14;
const G = 6.6743*10**-11

function getVolumeOfCone() {
    let radius = parseFloat(document.getElementById("input-radius").value);
    let mass = parseFloat(document.getElementById("input-mass").value);
    let volume = Math.sqrt((4*PI**2)*radius**3/G*mass);

    let output = `The volume is ${volume}`;
    document.getElementById("result-volume").innerText = output;
}