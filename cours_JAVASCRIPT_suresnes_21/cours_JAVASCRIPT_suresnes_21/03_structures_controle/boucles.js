// JS pour la page boucles

//alert('coucou');

//incrémentation et décrémentation
let a = 10, b = 10, c = 20, d = 20;
console.info(a, b, c, d);

document.getElementById('p1').innerHTML = 'post-incrémenter // a contient la valeur '+ a + ' , là je post-incrémente de 1,a est toujours égal à ' + a++ + 'puis a est égal à ' + a + ' après post-incrémentation.';

document.getElementById('p2').innerHTML = 'pré-incrémenter // b contient ' + b + ', là je pré-incrémente de 1, b est maintenant égal à ' + ++b;
console.log(b);

document.getElementById('p3').innerHTML = 'post-décrémenter // c contient ' + c + ', là je post-décrémente de 1, c est toujours égal à ' + c-- + ' puis c est égal à ' + c + ' après post-décrémentation.';

document.getElementById('p4').innerHTML = 'pré-décrémenter // d contient la valeur ' + d + ', là je pré-décrémente de 1, et donc d est égal à ' + --d;;
console.log(d);

//while

let w1 = 0;

console.info(typeof w1, w1);

while ( w1 < 10) {// tant que c'est vrai
    document.getElementById('while1').innerHTML += 'w1 contient la valeur ' + w1 + '<br>';// rajoute avec += la chaîne de caractères tant que la boucle n'est pas terminée
    w1++;// incrémente la valeur de la variable de départ
    console.log(typeof w1, w1);
}

//exo bouclez tant que w2 est inférieur à 10 sur id while2

let w2 = 0;

console.info(typeof w2, w2);

while ( w2 < 10) {// tant que c'est vrai
    document.getElementById('while2').innerHTML += 'w2 contient la valeur ' + w2 + '<br>';// rajoute avec += la chaîne de caractères tant que la boucle n'est pas terminée
    console.log(typeof w2, w2);
    w2++;// incrémente la valeur de la variable de départ
}

let w3 = 0;
console.info(typeof w3, w3);
do{// fait cela
    document.getElementById('dowhile1').innerHTML += 'w3 contient la valeur ' + w3 + '<br>';
    w3++;// incrémente
 }
while (w3 < 10);// tant que