const a = document.getElementById("a");
const h = document.getElementById("h");
const res = document.getElementById("result");

function calc() {
    const base = parseFloat(a.value);
    const height = parseFloat(h.value);
    if (!isNaN(base) && !isNaN(height)) {
        res.textContent = "Площа: " + (0.5 * base * height).toFixed(2);
    } else {
        res.textContent = "Площа: —";
    }
}

a.addEventListener("input", calc);
h.addEventListener("input", calc);