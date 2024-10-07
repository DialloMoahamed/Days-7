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
