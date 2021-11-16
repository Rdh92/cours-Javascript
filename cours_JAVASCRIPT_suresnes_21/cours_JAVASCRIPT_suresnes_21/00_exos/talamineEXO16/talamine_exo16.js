// Exo 16 - Programme Jeu Ni oui Ni non -Redha Talamine

// JS pour la page talamine_exo16.html

let x = prompt('On joue au ni oui ni non ?? Allez, tapez quelque chose !')

 let oui = 0;
 let non = 0;

while (oui < 5 || non > 50) {
    document.getElementById('p1').innerHTML = 'Vous avez perdu !';
  oui++;
  non++;
}
console.log(typeof oui , non);
