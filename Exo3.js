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


// Réponse numero 12
function sumOfArrayItems(array) {
    if (array.every(item => typeof item === 'number')) {
        return array.reduce((nom, tab) => nom + tab)
    } else {
        return "Ce tableau contient des élément qui ne sont pas des nombres"; 
    }
}
console.log(sumOfArrayItems([1,2,4,3,7]));


// Réponse numero 13
function average(arr) {
   if (arr.every(tout => typeof tout === 'number')) {
    return arr.reduce((premier,second) => premier + second / arr.length)
   } else {
    return "Ce tableau contient des élément qui ne sont pas des nombres"
   }
}
console.log(average([1,2,4,3,7]));


// Réponse numero 14
function modifiedArray(array) {
    if (array.length >= 5) {
    //   array[4] = prompt("Nouvelles valeurs"); 
      return array;
    } else {
      return "Élément non trouvé";
    }
  }
console.log(modifiedArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));

// Réponse numero 15
function isPrime(number) {
    for (let d = 2; d <= number; d++) {
        if (number % d !== 0) {
            return number + " est premier"
        } else {
            return number + " n'est pas premier"
        }
    }
   
}
console.log(isPrime(21));


// Réponse numero 16
function areunique(element) {
    for (let i = 0; i < element.length; i++) {
        if (element[i] >= 2) {
            return element[i] + " n'est pas unique"
        } else {
            return element[i] + " est unique"
        }
        
    }
  
}
console.log(areunique(['Avocado','Tomato', 'Potato','Mango', 'Lemon','Carrot']));


// Réponse numero 19
function genererTableauAleatoireUnique() {
    const nombresPossibles = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const tableauAleatoire = [];
    while (tableauAleatoire.length < 7) {
      const indexAleatoire = Math.floor(Math.random() * nombresPossibles.length);
      tableauAleatoire.push(nombresPossibles[indexAleatoire]);
      nombresPossibles.splice(indexAleatoire, 1);
    }
  
    return tableauAleatoire;
  }
  
  console.log(genererTableauAleatoireUnique());


// Réponse numero 20
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
function reverseCountries() {
    let tableA = [];
    for (let b = 0; b < countries.length; b++) {
        tableA.push(countries[b])
 };
 return tableA.reverse();
}
console.log(reverseCountries());
