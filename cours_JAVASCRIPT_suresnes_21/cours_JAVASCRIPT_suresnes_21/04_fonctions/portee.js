//coucou();

//ATTENTION évitons de déclarer plusieurs variables dans différents espaces en utilisant un même noms : ici on le fait pour la démo !

function porteNew() {
    let xlet = 1;
    var yvar = 2;

    if (true) {
       let xlet = 500; // let n'aura pas de portée au delà de ce bloc
       var yvar = 200; // var aura ue portée au delà de ce bloc

       document.getElementById('p1').innerHTML = 'la variable let "xlet" dans le if = ' + xlet;

       document.getElementById('p2').innerHTML = 'la variable var "yvar" dans le if = ' + yvar;
    }
}
porteNew();

    let x = 5;
    var y = 10;

function portee1() {// dans cette fonction j'appelle des variables qui ont des portées globales
    document.getElementById('p5').innerHTML = 'Depuis la fonction <code>portee1</code> : x = ' + x +' et y = ' + y + ' ';
}

function portee2() {
    let a = 123;
    var b = 456;
    document.getElementById('p6').innerHTML = 'Depuis la fonction <code>portee2</code> : a = ' + a +' et b = ' + b + ' ';
}

function portee3() {
    let x = 222;
    var y = 444;
    document.getElementById('p7').innerHTML = 'Depuis la fonction <code>portee3</code> : x = ' + x +' et y = ' + y + ' ';
}

//appel des fonctions
portee1();
portee2();
portee3();

//on affiche les globales x et y
document.getElementById('p8').innerHTML = 'ce code n\'est pas une fonction ! Je suis dans l\'espace global et je cherche les contenus de x et y : x = ' + x + ' et y = ' + y + '';