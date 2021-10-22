// faisons le if else if qui compare deux nombres, en sup, inférieur ou égal

let nbr1 = parseInt(prompt('1er nombre'));
let nbr2 = parseInt(prompt('2ème nombre'));

// si je rentre une information qui n'est pas un nombre
//le console.log nous écris NaN (Not a Number)
console.log(typeof nbr1, nbr1);
console.log(typeof nbr2, nbr2);

if (nbr1 > nbr2) {
    document.getElementById('p1').innerHTML = 'Votre nombre ' + nbr1 + ' est plus grand que '+ nbr2 + '';
}else if (nbr1 < nbr2) {
    document.getElementById('p1').innerHTML = 'Votre nombre ' + nbr1 + ' est plus petit que '+ nbr2 + '';

}else{
    document.getElementById('p1').innerHTML = 'Ces nombres sont égaux';
}

//isNan() nous dit "ce n'est pas un nombre"
//!isNan() nous dit "c'est bien un nombre"

//on doit vérifier d'abord qu ce sont bien des nombres qui sont saisipar l'utilisateur dans un if else
//si ce sont des nombres on fera le test de comparaison
//sinon on dira ce ne sont pas des nombres

if ( (!isNaN(nbr1)) && (!isNaN(nbr2))) {
    //(!isNaN(nbr1)) && (!isNaN(nbr2) cela vérifie "ce sont bien des nombres, tous les deux"
    if (nbr1 > nbr2) {
        document.getElementById('p1').innerHTML = 'Votre nombre ' + nbr1 + ' est plus grand que '+ nbr2 + '';
    }else if (nbr1 < nbr2) {
        document.getElementById('p1').innerHTML = 'Votre nombre ' + nbr1 + ' est plus petit que '+ nbr2 + '';
    
    }else{
        document.getElementById('p1').innerHTML = 'Ces nombres sont égaux';
    }
} else {
    document.getElementById('p1').innerHTML = 'Vous n\'avez pas saisi de nombre(s)';
}
