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


// Reponse numero 8
function circumOfCircle(r) {
    circonférence = 2 * Math.PI * r
    console.log(circonférence);
}
circumOfCircle(7);


// Reponse numero 9
function densité(masse,volume) {
   let densité = masse / volume;
   console.log(densité);
}
densité(12,2)


// Reponse numero 10
function speed(totaldistancecovered,totalamountoftimetaken) {
    let speed = totaldistancecovered / totalamountoftimetaken;
    console.log(speed);
}
speed(100,5)


// Reponse numero 11
function Weight(mass,gravity) {
    let poids = mass * gravity
    console.log(poids);
}
Weight(23,6)


// Reponse numero 12
function convertCelsiusToFahrenheit(oC) {
    oF = (oC * 9/5) + 32;
    console.log(oF);
}
convertCelsiusToFahrenheit(3);


// Reponse numero 13
function indicedemassecorporelle(poids,taille) {
    let imc = poids / (taille * taille) + ' Kg/m2';
    console.log(imc);
}
indicedemassecorporelle(70,1.90)


// Reponse numero 14

function checkSeason(month) { 
     if (month >= 2 && month <= 4) {
        console.log("C'est le printemps");
    } else if (month >= 5 && month <= 7) {
        console.log("C'est l'été");
    } else if (month >= 8 && month <= 10) {
        console.log("C'est l'automne");
    } else {
        console.log("C'est l'hiver");
    }
}
checkSeason(1)