// JS pour la page boucles

//alert('coucou');

//while

let w1 = 0;

console.log(typeof w1, w1);

while ( w1 < 10) {// tant que c'est vrai
    document.getElementById('while1').innerHTML += 'w1 contient la valeur ' + w1 + '<br>';// rajoute avec += la chaîne de caractères tant que la boucle n'est pas terminée
    w1++;// incrémente la valeur de la variable de départ
    console.log(typeof w1, w1);
}