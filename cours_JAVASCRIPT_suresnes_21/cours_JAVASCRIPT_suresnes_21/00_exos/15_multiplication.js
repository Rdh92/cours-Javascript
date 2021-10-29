// //   EXO REDHA   
//     var nombre = parseInt(prompt('Veuillez rentrer un nombre'));
// 	console.log(typeof nombre, nombre)
    
//     function table_multiplication(nombre){ 
// 	for (i=1; i<=10; i++) {
// 		resultat = nombre*i;
// 		document.write('<p> '+ nombre*i +'<br> </p>');
//         }
//     }
//     table_multiplication(nombre);	
    
    
//CORRECTION

var nombre1 = parseInt(prompt('Choisissez un premier nombre'));
console.log(typeof nombre1, nombre1);

for (var i = 1; i <= 10; i++) {
    var resultat = nombre1 * i;
    document.getElementById('p1').innerHTML += nombre1 + ' x ' + i + ' = '  + resultat + '<br>';
}

var nombre2 = Number(prompt('Et maintenant, nombre entre 2 et 9.'));
//var nombre1 = parseInt(prompt('Faisons la table de multiplication d\'un nombre));
console.log(typeof nombre2, nombre2);

if(nombre2 >= 2 && nombre2 <=9) {
    for ( var i = 1; i <=10; i++) {
        var resultat = nombre2 * i;
        document.getElementById('p2').innerHTML += nombre2 + ' x ' + i + ' = '  + resultat + '<br>';
    } 
} else {
        document.getElementById('p2').innerHTML = 'Le nombre doit être compris entre 2 et 9 !';
}
