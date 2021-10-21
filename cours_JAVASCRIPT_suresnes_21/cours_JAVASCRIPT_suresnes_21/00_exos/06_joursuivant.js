// let jour = prompt ('1 - Quel jour sommes-nous ?');
// console.log(jour);

// EXO fait par REDHA 
// function semaine(jour) {

//     if (jour =='Lundi') {
//         var semaine1 = document.write('Aujourd\'hui nous sommes ' + jour + ' et demain c\'est Mardi');
//     } else if (jour == 'Mardi'){
//         var semaine1 = document.write('Aujourd\'hui nous sommes ' + jour + ' et demain c\'est Mercredi');
//     } else if (jour == 'Mercredi') {
//         var semaine1 = document.write('Aujourd\'hui nous sommes ' + jour + ' et demain c\'est Jeudi');
//     } else if (jour == 'Jeudi') {
//         var semaine1 = document.write('Aujourd\'hui nous sommes ' + jour + ' et demain c\'est Vendredi'); 
//     } else if (jour == 'Vendredi') {
//         var semaine1 = document.write('Aujourd\'hui nous sommes ' + jour + ' et demain c\'est Samedi');
//     } else if (jour == 'Samedi') {
//         var semaine1 = document.write('Aujourd\'hui nous sommes ' + jour + ' et demain c\'est Dimanche');
//     } else if (jour == 'Dimanche') {
//         var semaine1 = document.write('Aujourd\'hui nous sommes ' + jour + ' et aujourd\'hui c\'est repos !');  
//     }else
//         var semaine1 = document.write('Ce jour n\'existe pas, veuillez saisir un jour existant');
    
//         return semaine1;
// }
// semaine(jour);


// CORRECTION autre méthode 
var jour = prompt('1- Quel jour sommes-nous ? (avec if else if)');
console.log(typeof jour, jour);

if (jour === 'lundi' || jour === 'Lundi') {
    document.getElementById('p1').innerHTML = "Demain c\'est mardi";
} else if (jour === 'mardi') {
    document.getElementById('p1').innerHTML = "Demain c\'est merdredi";
} else if (jour === 'mercredi') {
    document.getElementById ('p1').innerHTML = "Demain c\'est jeudi";
} else if (jour === 'jeudi') {
    document.getElementById('p1').innerHTML = "Demain c\'est vendredi";
} else if (jour === 'vendredi') {
    document.getElementById('p1').innerHTML = "Demain c\'est samedi et le week-end !";
} else if (jour === 'samedi') {
    document.getElementById('p1').innerHTML = "Demain c\'est dimanche";
} else if (jour === 'dimanche') {
    document.getElementById('p1').innerHTML = "Demain bon courage pour la semaine !";
} else {
    document.getElementById('p1').innerHTML = "Ce jour n\'existe pas !";
}
// fin correction 



// avec switch

var jour2 = prompt('1- Quel jour sommes-nous ? (avec switch)');
console.log(typeof jour2, jour2);

switch(jour2) {
    case 'lundi':
        document.getElementById('p2').innerHTML = ' Aujourd\'hui nous sommes ' + jour2 + ',  demain c\'est mardi';
        break;
case 'mardi':
        document.getElementById('p2').innerHTML = ' Aujourd\'hui nous sommes ' + jour2 + ', demain c\'est mercredi';
        break;
case 'mercredi':
        document.getElementById('p2').innerHTML = ' Aujourd\'hui nous sommes ' + jour2 + ', demain c\'est jeudi';
        break;
case 'jeudi':
        document.getElementById('p2').innerHTML = 'Aujourd\'hui nous sommes ' + jour2 + ', demain c\'est vendredi';
        break;
case 'vendredi':
        document.getElementById('p2').innerHTML = ' Aujourd\'hui nous sommes ' + jour2 + ',demain c\'est samedi';
        break;
case 'samedi':
        document.getElementById('p2').innerHTML = ' Aujourd\'hui nous sommes ' + jour2 + ', demain c\'est dimanche';
        break;
case 'dimanche':
        document.getElementById('p2').innerHTML = 'Aujourd\'hui nous sommes ' + jour2 + ', demain c\'est le boulot !';
        break;
default:
    document.getElementById('p2').innerHTML = "Ce jour n\'existe pas !"
} // fin switch