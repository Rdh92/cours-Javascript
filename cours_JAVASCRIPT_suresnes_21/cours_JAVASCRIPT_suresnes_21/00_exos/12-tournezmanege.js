let w1 = 0;
console.info(typeof w1, w1);

while (w1 < 11) {
    document.getElementById('p1').innerHTML += 'Avec while; c\'est le tour n° ' + w1 + ' <br>';
    w1++;
    console.log(typeof w1, w1);
}

for (let i = 0; i <= 10; i++) {
    document.getElementById('p2').innerHTML += 'Avec for; c\'est le tour n° ' + i + '<br>'
}

let w2 = parseInt(prompt ('Combien de tours voulez-vous ?'));
console.info(typeof w2, w2);

while (w2 <= 10 ) {
    document.getElementById('p3').innerHTML += ' C\'est le tour n° ' + w2 + ' <br>';
    w2++; break;
    console.log(typeof w2, w2);
}

let w3 = parseInt (prompt('Combien de tours ?' , 'saisissez un nombre svp'));
console.info(typeof w3, w3);

for (let w3 = 0; w3 < 100; w3++) {
    if (!isNaN(w3)){if (w3 == 100) {
        break;
    }
    document.getElementById('p4').innerHTML += 'C\'est le tour n° ' + w3 + '<br>';
    } else {
        document.getElementById('p4').innerHTML += 'Il faut rentrer un nombre !';
    break; 
}
    
}

// CORRECTION

// 1- boucle WHILE
let manege = 0;
// console.log(typeof manege, manege);
while (manege < 3) {
    manege++;
    // console.log(manege);
    document.getElementById('p1').innerHTML += 'while 1 ; c\'est le tour n° ' + manege + '<br>';
} 

// let tour1 = 0;
// console.log(typeof tour1, tour1);
// while (tour1 < 3) {
//     document.getElementById('tour1').innerHTML += 'C\'est le tour de manège numéro ' + tour1 + '<br>';
//     tour1++;
//     console.log(typeof tour1, tour1);
// }

let nbrTours1 = parseInt(prompt('WHILE / Combien de tours de manège voulez faire ? ', 'saisissez un nombre, svp'));
console.log(typeof nbrTours1, nbrTours1);

let manege2 = 0;
while (manege2 < nbrTours1) {
    manege2++;// si j'incrémente avant le bloc de code le compte démarre à 1 et s'arrête à nbrTours1
    console.info(manege2);
    document.getElementById('p2').innerHTML += 'while 1 ; c\'est le tour n° ' + manege2 + '<br>';
	// manege2++;// si j'incrémente après le bloc de code le compte démarre à 0 et s'arrête à nbrTours1 - 1
} 

for (let i = 1; i <= 10; i++) {//ici on initialise i à 1 ; i prend la valeur 1 boucle une 1ère fois et incrémente ensuite (jusqu'à 10)
        // console.info(i);
        document.getElementById('p3').innerHTML += 'for 1 ; c\'est le tour n°' + i + '<br>';
    }

let nbrTours2 = parseInt(prompt('FOR / Combien de tours à faire ?')); 
for (let i = 1; i <= nbrTours2; i++) {//ici on initialise i à 1 ; i prend la valeur 1 boucle une 1ère fois et incrémente ensuite (jusqu'à 10)
    console.info(i);
    document.getElementById('p4').innerHTML += 'FOR /  Avec une boucle for ; c\'est le tour n°' + i + '<br>';
}





