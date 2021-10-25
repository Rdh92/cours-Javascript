// coucou();

// page diaporama

// diaporama 2
//console.log(document.getElementById ('btnDiapo2));
//une fonction anonyme

document.getElementById('btnDiapo2').addEventListener('click', function() {
    document.getElementById('imgDiapo2').src = '../cours_JAVASCRIPT_suresnes_21/img/2.jpg';
    document.getElementById('imgDiapo2').alt = 'une piscine à cannes';
})

//diaporama 3

//on va faire une fonction tourneImages()

function tourneImages() {
    var getImage3 = document.getElementById('imgDiapo3').getAttribute('src');
    // ce console.log ne s'affiche qu'au clique 
    console.log(getImage3);

    switch(getImage3) {
        case '../cours_JAVASCRIPT_suresnes_21/img/1.jpg' :
        document.getElementById('imgDiapo3').src= '../cours_JAVASCRIPT_suresnes_21/img/2.jpg'
        break;
    }


switch(getImage3) {
    case '../cours_JAVASCRIPT_suresnes_21/img/2.jpg' :
    document.getElementById('imgDiapo3').src= '../cours_JAVASCRIPT_suresnes_21/img/3.jpg'
    break;
}

switch(getImage3) {
    case '../cours_JAVASCRIPT_suresnes_21/img/3.jpg' :
    document.getElementById('imgDiapo3').src= '../cours_JAVASCRIPT_suresnes_21/img/4.jpg'
    break;
}

switch(getImage3) {
    case '../cours_JAVASCRIPT_suresnes_21/img/4.jpg' :
    document.getElementById('imgDiapo3').src= '../cours_JAVASCRIPT_suresnes_21/img/1.jpg'
    break;
}

}//fin fonction tourneImages()
