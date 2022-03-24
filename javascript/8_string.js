let string1 = "oi"; 
let string2 = 'oi';
let string3 = `oi`;
// um pouco diferente
let string4 = new String("oi");


console.log(string1[0]);
console.log(string1.charAt(1))
console.log(string1.toUpperCase());
console.log(string1.toLowerCase())
console.log(string1.length);

let longString = "String longas podem ser  \
divididas em múltiplas linhas para tornar o código \
mais legível."
console.log(longString);

//replace e replaceAll
let ex = "O Ivan é legal"
console.log(ex.replace("Ivan", "Professor"));

let ex2 = "JavaScript é legal, além disso, JavaScript é fácil!"
console.log(ex2.replace("JavaScript", "Angular"))
console.log(ex2.replaceAll("JavaScript", "Angular"))


//split

let linhaCsv = "ivan;professor;bologna";
console.log(linhaCsv.split(";"));