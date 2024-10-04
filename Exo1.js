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


// Reponse numero 4
function areaOfRectangle(x, y) {
    let aire = x * y;
    console.log(aire);
}
areaOfRectangle(10,5);


// Reponse numero 5
function périmètredurectangle(x,y) {
    périmètre = 2 * (x + y)
    console.log(périmètre);
}
périmètredurectangle(5,9)


// Reponse numero 6
function volumeOfRectPrism(x,y,z) {
    volume = x * y * z
    console.log(volume);
}
volumeOfRectPrism(5,9,13);


// Reponse numero 7
function areaOfCircle(r) {
    aire = Math.PI * r * r 
    console.log(aire);
}
areaOfCircle(4)