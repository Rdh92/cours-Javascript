// coucou();

// alert('coucou');
console.log('***********');

var nombre = 0;
console.log(typeof nombre, nombre);

console.log('*****WHILE*****');

while (nombre < 50 || nombre > 100) {
    nombre = prompt ('Entrez un nombre entre 50 et 100 : ');
    console.log(typeof nombre);
}

document.write('<p>Vous avez rentré le chiffre ' + nombre + ' la variable récupérée est bien comprise entre 50 et 100</p>')