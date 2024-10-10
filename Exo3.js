// Réponse numero 1
const lettres = 'AZERTYUIJH12345678GFDSQDFYUIJHGFDER123456789TYUwxcvghjkloiuytrdfghjiiuezqsf123456789ghhjoigycdsufduzgf123456789fèuzuyzuyffzdzd';
let randomId = '';
let randomId2 = '';
function userIdGenerator() {
   let premiereEntrer = prompt("Entrez le nombre de caractères")
   let deuxiemeEntrer = prompt("Entrez le nombre d'identifiants")
    for (let r = 0; r < premiereEntrer; r++) {
        let randomIndex = Math.floor(Math.random() * lettres.length);
        randomId += lettres.charAt(randomIndex); 
    };
    for (let q = 0; q < deuxiemeEntrer; q++) {
        let randomIndexe = Math.floor(Math.random() * lettres.length);
        randomId2 += lettres.charAt(randomIndexe); 
    };
    console.log(randomId);
    console.log(randomId2);
}
console.log(userIdGenerator());


// Réponse numero 2
function rgbColorGenerator(couleur) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    couleur = "rgb(" + r + "," + g + "," + b + ")";
    return couleur
}
console.log(rgbColorGenerator());


// Réponse numero 3
const characters = '0123456789abcdef'
let randomCharacters = '#';
function arrayOfHexaColors() {
    for (let r = 0; r < 6; r++) {
        let random = Math.floor(Math.random() * characters.length);
        randomCharacters += characters.charAt(random);
        
    };
    return randomCharacters.split();
}
console.log(arrayOfHexaColors());