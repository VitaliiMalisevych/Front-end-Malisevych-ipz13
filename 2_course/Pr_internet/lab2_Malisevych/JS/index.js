function clock() {
    let now = new Date();

    let year = now.getFullYear();
    let month = String(now.getMonth() + 1).padStart(2, '0');
    let day = String(now.getDate()).padStart(2, '0');
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');


    let dateTimeStructure = `${year}-${month}-${day}-${hours}-${minutes}-${seconds}`;

    document.clock.datetime.value = dateTimeStructure;

    setTimeout(clock, 1000);
}






function addSymbol(symbol) {
    document.getElementById("display").value += symbol;
}
function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (e) {
        document.getElementById("display").value = "Error";
    }
}
function clearDisplay() {
    document.getElementById("display").value = "";
}






let str, stb;

function matr() {
    str = parseInt(main_form.t_str.value);
    stb = parseInt(main_form.t_stb.value);

    let res_str = "<table border='1' cellspacing='0' cellpadding='5'>\n";
    for (let i = 1; i <= str; i++) {
        res_str += "<tr>\n";
        for (let j = 1; j <= stb; j++) {
            let value = 2 * i - j;
            res_str += "<td>";
            res_str += "<input type='text' id='_" + i + "_" + j + "' value='" + value + "'>";
            res_str += "</td>\n";
        }
        res_str += "</tr>\n";
    }
    res_str += "</table>";
    main_div.innerHTML = res_str;
}

function fun_build() {
    let product = 1;
    for (let i = 1; i <= str; i++) {
        let id = "_" + i + "_" + stb;
        let value = parseInt(document.getElementById(id).value);
        product *= value;
    }
    alert("Добуток елементів останнього стовпця = " + product);
}



