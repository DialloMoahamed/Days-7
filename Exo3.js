// Réponse numero 18
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