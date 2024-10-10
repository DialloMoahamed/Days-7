// Réponse numero 1
function solveLinEquation(a,b,c,x,y) {
    équationLinéaire =  (a * x) + (b * y) + c 
    console.log(équationLinéaire);
}
solveLinEquation(1,3,6,7,20); 


// Réponse numero 2
function solveQuadEquation(a,b,c) {
    const discriminant = Math.sqrt(b * b - 4 * a * c)
    if (discriminant > 0) {
        x1 = -b - discriminant / 2 * a;
        x2 = -b + discriminant / 2 * a;
        return {x1, x2}
    } else if (discriminant < 0) {
        s = x < 0;
        return {s}
    } else if (discriminant === 0) {
        S = -b / 2 * a
        return {S}
    }
};
console.log(solveQuadEquation(2, 2, 2));
console.log(solveQuadEquation(1, 4, 4));
console.log(solveQuadEquation(1, -1 ,-1));
console.log(solveQuadEquation(1, 7, 12));
console.log(solveQuadEquation(1, 0, -4));
console.log(solveQuadEquation(1, -1, 0));


// Réponse numero 3
function printArray(array) {
    for (let o = 0; o < array.length; o++) {
        console.log(array[o]);;  
    }
}
printArray(["Mohamed", 22, "serpent", 33])


// Réponse numero 4
function showDateTime(now) {
    now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1); 
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;

    console.log(formattedDate); 
}
showDateTime()


// Réponse numero 5
function swapValues(x, y) {
    [x, y] = [y, x]
    console.log(x,y);
}
swapValues(1,6)


// Réponse numero 6
function reverseArray(array2) {
    let array3 = [];
    for (let i = array2.length; i >= 0; i--) {
       array3.push(array2[i])
    }
    return array3
}
console.log(reverseArray([21,34,32,23,91,1]));


// Réponse numero 7
function capitalizeArray(tableau) {
    let tableauEnMajuscule = []
    for (let s = 0; s < tableau.length; s++) {
        tableauEnMajuscule.push(tableau[s].toUpperCase())
    }
    return tableauEnMajuscule
}
console.log(capitalizeArray(["mohamed", "diallo", "abdoul rahim"]));


// Réponse numero 8
function addItem(item) {
    let tableItem = []
    for (let u = 0; u < item.length; u++) {
        tableItem.push(item[u])
    }
    return tableItem
}
console.log(addItem(["mohamed", "abdoul rahim"]));


// Réponse numero 9
const tableau = [1, 2, 23, "Mohamed", "Ibrahim", true, false]
function removeItem(index) {
    tableau.splice(index, 1)
    return tableau
}
console.log(removeItem(6));


// Réponse numero 10
function sumOfNumbers(number) {
    let sum = 0
    for (let s = 0; s < number; s++) {
       sum += number
    }
    return sum  
}
console.log(sumOfNumbers(2));


// Réponse numero 11
function sumOfOdds(limit) {
    let som = 0
    for (let i = 0; i <= limit; i++) {
        if (i % 2 !== 0) {
            som += i
            
        }
    }
    return som
}
console.log(sumOfOdds(10));


// Réponse numero 12
function sumOfEven(Even) {
    let paires = 0
    for (let p = 0; p <= Even; p++) {
        if (p % 2 === 0) {
            paires += p
        }
    }
   return paires
}
console.log(sumOfEven(10));


// Réponse numero 13
function evensAndOdds(positive) {
    let evens = 0;
    let odds = 0;
    for (let e = 0; e <= positive; e++) {
        if (e % 2 === 0) {
            evens++
        }else {
            odds++ 
        }
    }
    console.log("The number of odds are " + odds + ".")
    console.log("The number of evens are " + evens + ".");
}
console.log(evensAndOdds(100));


// Réponse numero 14
function takesAnyNumber(item) {
    
}
console.log(takesAnyNumber());


// Réponse numero 15
function randomUserIp() {
    let octets = [];
    for (let t = 0; t <= 4; t++) {
        octets.push(Math.floor(Math.random() * 256))
    }
    return octets.join('.')
}
console.log(randomUserIp());


// Réponse numero 16
function randomMacAddress(macadress) {
    let mac = [];
    for (let c = 0; c <= 6; c++) {
        mac.push(Math.floor(Math.random() * 256).toString(16));
    }
    return mac.join(':')
}
console.log(randomMacAddress());


// Réponse numero 17
const characters = '0123456789abcdef'
let randomCharacters = '#';
function randomHexaNumberGenerator() {
    for (let r = 0; r < 6; r++) {
        let random = Math.floor(Math.random() * characters.length);
        randomCharacters += characters.charAt(random);
        
    };
    return randomCharacters;
}
console.log(randomHexaNumberGenerator());


// Réponse numero 18
const lettres = 'AZERTYUIJH12345678GFDSQDFYUIJHGFDER123456789TYUwxcvghjkloiuytrdfghjiiuezqsf123456789ghhjoigycdsufduzgf123456789fèuzuyzuyffzdzd';
let randomId = '';
function userIdGenerator() {
    for (let r = 0; r < 6; r++) {
        let randomIndex = Math.floor(Math.random() * lettres.length);
        randomId += lettres.charAt(randomIndex);
        
    };
    return randomId;
}
console.log(userIdGenerator());
