let correct = 0, total = 0, max = 5;
let a, b, op, rightAns;

function newTask() {
    a = Math.floor(Math.random()*10);
    b = Math.floor(Math.random()*10);
    let ops = ["+","-","*","/"];
    op = ops[Math.floor(Math.random()*4)];
    if (op === "/" && b === 0) b = 1;
    rightAns = eval(a+op+b);
    document.getElementById("task").textContent = `${a} ${op} ${b} = ?`;
    document.getElementById("answer").value = "";
    document.getElementById("result").textContent = "";
}

function check() {
    let ans = parseFloat(document.getElementById("answer").value);
    if (ans === rightAns) {
        document.getElementById("result").textContent = "Правильно ✅";
        correct++;
    } else {
        document.getElementById("result").textContent = "Помилка ❌, правильна відповідь: " + rightAns;
    }
    total++;
    document.getElementById("score").textContent = `Рахунок: ${correct} з ${total}`;
}

function nextTask() {
    if (total < max) {
        newTask();
    } else {
        document.getElementById("task").textContent = "Гру завершено!";
    }
}

newTask();