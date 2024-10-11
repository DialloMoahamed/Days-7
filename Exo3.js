// Réponse numero 1
// const lettres = 'AZERTYUIJH12345678GFDSQDFYUIJHGFDER123456789TYUwxcvghjkloiuytrdfghjiiuezqsf123456789ghhjoigycdsufduzgf123456789fèuzuyzuyffzdzd';
// let randomId = '';
// let randomId2 = '';
// function userIdGenerator() {
//    let premiereEntrer = prompt("Entrez le nombre de caractères")
//    let deuxiemeEntrer = prompt("Entrez le nombre d'identifiants")
//     for (let r = 0; r < premiereEntrer; r++) {
//         let randomIndex = Math.floor(Math.random() * lettres.length);
//         randomId += lettres.charAt(randomIndex); 
//     };
//     for (let q = 0; q < deuxiemeEntrer; q++) {
//         let randomIndexe = Math.floor(Math.random() * lettres.length);
//         randomId2 += lettres.charAt(randomIndexe); 
//     };
//     console.log(randomId);
//     console.log(randomId2);
// }
// console.log(userIdGenerator());


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
function arrayOfHexaColors(colorhexa) {
    const table = []
    for (let i = 0; i < colorhexa; i++) {
        let randomCharacters = '#';
        for (let r = 0; r < 6; r++) {
            random = Math.floor(Math.random() * characters.length);
            randomCharacters += characters.charAt(random)  
    }
        table.push(randomCharacters)
   }
   
    return table;
        
} 
console.log(arrayOfHexaColors(10));


// Réponse numero 4
function arrayOfRgbColors(couleurrgb) {
    const table2 = []
    for (let j = 0; j < couleurrgb; j++) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        couleure = "rgb(" + r + "," + g + "," + b + ")";
        table2.push(couleure)
    }
    return table2
}
console.log(arrayOfRgbColors(6));


// Réponse numero 5
const character = '0123456789abcdef'
let randomCharacters = '#';
function convertHexaToRgb() {
    let recap = ''
    for (let r = 0; r < 6; r++) {
        let random = Math.floor(Math.random() * character.length);
        randomCharacters += characters.charAt(random);
    };
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    color = "rgb(" + r + "," + g + "," + b + ")";
    if (recap = randomCharacters) {
        return color
    }
    return recap
}
console.log(convertHexaToRgb());


// Réponse numero 6
const lettre = '0123456789abcdef'
function convertRgbToHexa() {
    let recaputilatif = '';
    let randomCharacters = '#';
        for (let r = 0; r < 6; r++) {
        random = Math.floor(Math.random() * lettre.length);
        randomCharacters += lettre.charAt(random);  
    }
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    color = "rgb(" + r + "," + g + "," + b + ")";
    if (recaputilatif = color) {
        return randomCharacters
    }
    return recaputilatif
}
console.log(convertRgbToHexa());


// Réponse numero 7
function generateColors(count, format) {
    
}


// Réponse numero 8
function shuffleArray(array) {
    let melange = array.sort()
    return melange
}
console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


// Réponse numero 9
function factorielle(n) {
   if (n < 0) {
        return "La factorielle n'est défini que pour les nombres positif"
   } else if (n === 0 || n === 1) {
        return 1
   } else {
    let resulta = 1;
    for (let o = 2; o <= n; o++) {
        resulta *= o
    }
    return resulta
    }
    
}
console.log(factorielle(2));


// Réponse numero 10
function isEmpty(empty) {
    if (Number(empty) || empty === ""|| empty === null || empty === NaN){
        return "He is not empty"
    } else {
        return "He is empty"
    } 
}
console.log(isEmpty());


// Réponse numero 11
function sum(...nombres) {
    return nombres.reduce((totale, nombre) => totale + nombre)
}
console.log(sum(2,3,4,12,13));