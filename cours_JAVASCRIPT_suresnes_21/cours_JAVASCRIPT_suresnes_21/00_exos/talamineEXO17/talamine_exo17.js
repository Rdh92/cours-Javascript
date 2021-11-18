//page JS pour la page talamine_exo17.html

let grala = 1;

for (let grala = 1; grala <= 100; grala++) {
    if (grala % 3 === 0) {//test
        document.getElementById('p1').innerHTML += 'Grala <br>';
 }else if(grala % 5 === 0){
    document.getElementById('p1').innerHTML += 'Bu <br>';
}else if( grala % 3 && 5 === 0){
    document.getElementById('p1').innerHTML += 'Gralabu <br>';
} else {
    document.getElementById('p1').innerHTML += '' + grala +'<br>';
}

}
// fin de for
console.log(typeof grala, grala);