// Exo 16 - Programme Jeu Ni oui Ni non -Redha Talamine

// JS pour la page talamine_exo16.html

// let x = prompt('On joue au ni oui ni non ?? Allez, tapez quelque chose !')

//  let oui = 0;
//  let non = 0;

// while (oui < 5 || non > 50) {
//     document.getElementById('p1').innerHTML = 'Vous avez perdu !';
//   oui++;
//   non++;
// }
// console.log(typeof oui , non);


//CORRECTION

let disMoi = ''; //initialisation de la variable avec une string vide, on y rentrera la réponse de l'utilisateur
let i = 1;

//tant que le prompt ne contient pas oui ET ne contient pas non, boucle
while((disMoi !== 'oui') && (disMoi !== 'non')) {
    disMoi = prompt('On jour au ni oui ni non, tape quelque chose !');
    i++; // une boucle a besoin de nombre de tours
}
console.log('---boucle terminée---');
console.log(disMoi)
document.getElementById('p1').classList.add('stabilo');
document.getElementById('p1').innerHTML = 'Vous avez perdu';