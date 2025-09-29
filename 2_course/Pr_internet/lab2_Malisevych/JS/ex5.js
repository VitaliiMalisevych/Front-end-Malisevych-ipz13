let user = {name: "Іван", age: 20};

console.info("Це інформаційне повідомлення (info).");
console.warn("Це попередження (warn)!");
console.error("Це повідомлення про помилку (error).");

console.dir(user);
console.dirxml(document.body);

console.time("loop");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("loop");

console.profile("MyProfile");
for (let i = 0; i < 100000; i++) {}
console.profileEnd("MyProfile");

let x = 10;
console.assert(x % 2 === 0, "x не є парним числом!");
