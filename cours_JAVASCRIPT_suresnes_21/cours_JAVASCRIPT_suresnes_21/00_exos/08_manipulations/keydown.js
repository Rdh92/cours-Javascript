// // coucou();

// // page keydown
// document.addEventListener('keydown', clavier);//écouteur d'évènements sur une touche pressée
// document.onkeydown = clavier;
// console.log(document.getElementById('bouge'));

// // la fonction clavier
// function clavier(e) {
//     var carre = document.getElementById('bouge');
//     if (e.keycode == '38') {//38 flèche haut
//         carre.style.top = (carre.offsetTop - 20) + 'px';
//     } else if (e.keycode == '39') {//39 flèche de droite
//         carre.style.left = (carre.offsetLeft + 20) + 'px';
//     } else if (e.keycode == '40') {//40 flèche du bas
//         carre.style.left = (carre.offsetTop + 20) + 'px';
//     }  else if (e.keycode == '37') {//37 flèche de gauche
//         carre.style.left = (carre.offsetLeft - 20) + 'px';
//     }
// }//fin fonction clavier

// page Js pour 08/03 Keydown
document.addEventListener('keydown', clavier);//écouteur d'évènement sur une touche pressée
document.onkeydown = clavier;
console.log(document.getElementById('bouge'));

function clavier (e) {
    var carre = document.getElementById('bouge')
if (e.keyCode == '38') {//flèche haut
carre.style.top = (carre.offsetTop - 20) + 'px';
} else if (e.keyCode == '39') {//flèche de droite
    carre.style.left = (carre.offsetLeft + 20) + 'px';
}else if (e.keyCode == '40') {//flèche du bas
    carre.style.top = (carre.offsetTop + 20) + 'px';
} else if (e.keyCode == '37') {//flèche de gauche
    carre.style.left = (carre.offsetLeft - 20) + 'px';

}

}//fin fonction