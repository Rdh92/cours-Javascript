// coucou();

// page des évènements

//1 - Evènement avec un fonction
//2 - je sélectionne la div #rouge
let event1 = document.querySelector('#rouge');
console.log(event1);
console.log(event1.innerHTML);
//on va utiliser

event1.addEventListener('click', fonctionDivRouge);
//création de la fonction

// si je veux débugger la fonction je peux passer e comme event dans les paramètres et faire un console.log(e) dans la fonction 
// function fonctionDivRouge(e) {
// console.log(e);
// alert('Vous avez cliqué sur la div #rouge !');
// }
function fonctionDivRouge() {
    alert('Vous avez cliqué sur la div rouge !')
    this.style.backgroundColor = "green";
}

// /second exemple avec une fonction anonyme

let event2 = document.querySelector('#p1');
console.log(event2);

event2.addEventListener('click',function() {
    alert('Vous avez cliqué sur le paragraphe id p1');
    this.style.backgroundColor = "green";
    this.style.color = "black";
});

// la même fonctionnalité sans utilisation de variable
document.querySelector('#p1').addEventListener('click', function() {
    alert('Vous avez cliqué sur le pararagraphe id p1');
    this.style.backgroundColor = "green";
    this.style.color = "black";
})

//2  nouveau mot-clé "mouseover"

document.getElementById('orange').addEventListener('mouseover', fonctionDivOrange);

function fonctionDivOrange(e) {
    alert('Vous avez survolé la div orange');
    this.innerHTML = "coucou";
    // je change la taille de typo à 1.5em
    this.style.fontSize
}

document.querySelector('#bleu').addEventListener('mouseoout', fonctionDivbleu);

function fonctionDivbleu(e) {
   console.log (e);
    alert('Vous avez survolé la div #bleu');
    this.innerHTML = "coucou2";
    // je change la taille de typo à 1.5em
    this.style.fontSize = "1.5em";
}

//4- FORMULAIRE
document.querySelector('#email').addEventListener('focus', inputEmailFocus);
function inputEmailFocus() {
    alert('focus sur le champs email');
    this.style.background = 'lightgreen';
    this.classList.add('text-white');
}

document.querySelector('#pass').addEventListener('blur' , inputPasswordBlur);
function inputPasswordBlur() {
    this.style.background = 'lightblue';
    this.classList.add = ('text-white');
}

//écouteur d'évènement sur le bouton avec click
document.querySelector('#submit').addEventListener('click', inputBtnSubmit);

function inputBtnSubmit(event) {
    event.preventDefault();//on ajoute "event" en argument à cette fonction //event.preventDefault();// neutralise le formulaire pour la démo ou si on récupère les données en développement. Cela neutralise également les required
    //les champs ne sont pas réinitialisés le contenu est conservé
    alert('Nous avons bien reçu votre formulaire');
    this.classList.add('bg-succes');
    this.innerHTML = "Félicitations vous êtes connecté ! ";
}

