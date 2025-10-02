let letters = ['а','б','в','г','д','е','є','и','і','ї','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ю','я'];
let digits = ['0','1','2','3','4','5','6','7','8','9'];

const keyboard = document.getElementById("keyboard");
const textarea = document.getElementById("text");

function renderKeyboard() {
    keyboard.innerHTML = "";
    keyboard.innerHTML += digits.map(d => `<button onclick="addChar('${d}')">${d}</button>`).join("");
    keyboard.innerHTML += "<br>";
    keyboard.innerHTML += letters.map(l => `<button onclick="addChar('${l}')">${l}</button>`).join("");
}

function addChar(c) {
    textarea.value += c;
}

function clearText() {
    textarea.value = "";
}

renderKeyboard();