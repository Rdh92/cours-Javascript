//fonctions

//alert('coucou');

console.log(Math.random());
document.getElementById('p1').innerHTML= Math.random();//ici on éxécute le code "caché" derrière la fonction, on appelle la fonction ou on l'invoque

//replace
let discours1 = 'Bonjour, je suis Donald Trump et j\'ai gagné';
console.log(discours1);

let discours2 = discours1.replace('Donald Trump', 'Joe Biden');
console.log(discours2);

document.getElementById('p2').innerHTML = discours2;

//création de fonctions

//1- multiplier le résultat de random() par 100

function randomFois100(){
    return Math.random() * 100;
}

console.log(randomFois100);

document.getElementById('p3').innerHTML = randomFois100();

// 2nd exemple une multiplication

function multiplier(nbr1, nbr2) {// les paramètres de  la fonction
    // return (nbr1 * nbr2);// la fonction simplement
    return ('la multiplication de ' + nbr1 + ' par ' + nbr2 + ' = ' + (nbr1 * nbr2));// ce bloc de code qui renvoi une string avec le calcul
}

//ici on "appelle" la fonction
//un appel de fonction
console.log(multiplier(2,5));//la fonction avec les arguments
document.getElementById('p4').innerHTML = multiplier(10,9);//idem

// EXO faites une fonction pour soustraire un nombre d'un autre

function soustraire(nbr1, nbr2) {
    // return (nbr3 - nbr4);
    return ('la soustraction de ' + nbr1 + ' moins ' + nbr2 + ' = ' + (nbr1 - nbr2));
}
console.log(soustraire(100, 50));
document.getElementById ('p5').innerHTML = soustraire(100,50);



function addition(nbr1, nbr2){
    return ('Addition de ' + nbr1 + ' plus ' + nbr2 + ' = ' + (nbr1+nbr2));
}

console.log(addition(1000,280));
document.getElementById ('p6').innerHTML = addition(1000,280);

//modulo
function leModulo(nbr1, nbr2){
    // return (nbr1 % nbr2);
    return ('le modulo (le reste de la division) : ' + nbr1 + ' / ' + nbr2 + ' le modulo est ' + (nbr1 % nbr2));
}
console.log(leModulo(10,54));
document.getElementById('p8').innerHTML = leModulo (10,3);