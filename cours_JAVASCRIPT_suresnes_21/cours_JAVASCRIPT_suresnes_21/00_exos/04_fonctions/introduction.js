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