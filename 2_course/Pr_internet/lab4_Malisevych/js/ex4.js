function finishTest() {
    const form = document.forms.testForm;
    let total = 0;
    let output = `
    <table>
      <tr><th>№</th><th>Питання</th><th>Відповідь</th><th>Бал</th></tr>
  `;

    let q1 = form.q1;
    let ans1 = [...q1].find(r => r.checked);
    let score1 = ans1 ? parseFloat(ans1.value) : 0;
    output += `<tr><td>1</td><td>Автор JS</td><td>${ans1 ? ans1.nextSibling.textContent.trim() : '-'}</td><td>${score1}</td></tr>`;
    total += score1;

    let q2 = form.q2;
    let ans2 = [...q2].find(r => r.checked);
    let score2 = ans2 ? parseFloat(ans2.value) : 0;
    output += `<tr><td>2</td><td>Рік створення</td><td>${ans2 ? ans2.nextSibling.textContent.trim() : '-'}</td><td>${score2}</td></tr>`;
    total += score2;

    let q3 = [...form.q3];
    let checked3 = q3.filter(c => c.checked);
    let correct3 = checked3.filter(c => c.value === "1").length;
    let score3 = 0;
    if (checked3.length === 2) score3 = correct3;
    output += `<tr><td>3</td><td>Типи даних</td><td>${checked3.map(c => c.nextSibling.textContent.trim()).join(', ') || '-'}</td><td>${score3}</td></tr>`;
    total += score3;

    let q4 = [...form.q4];
    let checked4 = q4.filter(c => c.checked);
    let correct4 = checked4.filter(c => c.value === "1").length;
    let score4 = 0;
    if (checked4.length === 2) score4 = correct4;
    output += `<tr><td>4</td><td>Методи масиву</td><td>${checked4.map(c => c.nextSibling.textContent.trim()).join(', ') || '-'}</td><td>${score4}</td></tr>`;
    total += score4;

    let q5 = form.q5;
    let score5 = parseFloat(q5.value);
    output += `<tr><td>5</td><td>Оператор порівняння</td><td>${q5.options[q5.selectedIndex].text}</td><td>${score5}</td></tr>`;
    total += score5;

    let q6 = [...form.q6.options].filter(o => o.selected);
    let correct6 = q6.filter(o => o.value == 1).length;
    let score6 = correct6;
    output += `<tr><td>6</td><td>Події</td><td>${q6.map(o => o.text).join(', ') || '-'}</td><td>${score6}</td></tr>`;
    total += score6;


    let q7 = form.q7.value.trim().toLowerCase();
    let score7 = q7 === "dom" ? 1 : 0;
    output += `<tr><td>7</td><td>Скорочення DOM</td><td>${form.q7.value || '-'}</td><td>${score7}</td></tr>`;
    total += score7;

    output += `</table><p><b>Загальний бал: ${total}</b></p>`;
    document.getElementById("result").innerHTML = output;
}