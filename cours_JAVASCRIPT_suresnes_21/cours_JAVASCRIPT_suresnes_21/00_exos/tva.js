// alert('Prix HT');

// let prix = prompt('prix HT');
// let ht = (prix);
// let tva = ht * 1.20;
// console.log(tva);
// document.write('Résultat : Prix ' + ht + ' HT pour un total de '+ tva +' pour obtenir le prix TTC');
// // console.log("Résultat : le prix TTC est de ' + tva + ' ");

//Correction

let prixHT = prompt('Prix Hors Taxes :');
console.log(prixHT);

// console.log("Le prix TTC est de : " + (prixHT * 1.2 + ' €. '));

let prixTTC = prixHT * 1.2;
console.log('Le prix TTC est de : ' + prixTTC + '€');

document.getElementById('p2').innerHTML = ('Pour un achat HT de ' + prixHT + ' €, le prix TTC est de : ' + prixTTC + '€');
