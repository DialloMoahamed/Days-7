// Reponse numero 1
function fullName() {
    let firstName = 'Mohamed';
    let secondName = 'Attahir';
    let space = ' ';
    let name = firstName + space + secondName
    console.log(name);
}
fullName();


// Reponse numero 2
function fullName(firstName = 'Mohamed',secondName = 'Attahir'){
    let space = ' ';
    let fullName = firstName + space + secondName
    console.log(fullName);
}
fullName();


// Reponse numero 3
function addNumbers(x,y) {
    let somme = x + y
    console.log(somme);
}
addNumbers(12,20);