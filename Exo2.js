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