let ukr = ['а','б','в','г','д','е','є','и','і','ї','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ю','я'];
let eng = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let digits = ['0','1','2','3','4','5','6','7','8','9'];
let layout = ukr;

const keyboard = document.getElementById("keyboard");
const textarea = document.getElementById("text");

function renderKeyboard() {
    keyboard.innerHTML = "";
    keyboard.innerHTML += digits.map(d => `<button onclick="addChar('${d}')">${d}</button>`).join("");
    keyboard.innerHTML += "<br>";
    keyboard.innerHTML += layout.map(l => `<button onclick="addChar('${l}')">${l}</button>`).join("");
}

function addChar(c) { textarea.value += c; }
function clearText() { textarea.value = ""; }
function switchLayout() {
    layout = (layout === ukr) ? eng : ukr;
    renderKeyboard();
}

renderKeyboard();