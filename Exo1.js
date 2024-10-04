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