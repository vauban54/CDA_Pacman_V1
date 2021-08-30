let score = 0;
let pacman = new Pacman(10, 11, 0);
let grille1 = new Grille();
let tabfantom = [
    new Fantome(18, 2, 0),
    new Fantome(2, 2, 0),
    new Fantome(18, 21, 0),
    new Fantome(2, 21, 0)
];

function toucheDirectionel(event) {
    switch (event.code) {
        case 'KeyW':
            pacman.mDirection = 2;
            break;
        case 'KeyS':
            pacman.mDirection = 1;
            break;
        case 'KeyA':
            pacman.mDirection = 4;
            break;
        case 'KeyD':
            pacman.mDirection = 3;
            break;
        default:
            console.log('Pacman ne répond plus');

    }
};
document.body.addEventListener("keydown", toucheDirectionel);

function tourDeJeu() {
    grille1.plateau();
    for (let i = 0; i < tabfantom.length; i++) {
        tabfantom[i].bougefantom();
        tabfantom[i].colisionfantom(grille1.tabPlateau, pacman);
        tabfantom[i].affichFantom(i);
    };
    pacman.bougePacman();
    pacman.colisionPacman(grille1.tabPlateau, tabfantom);
    pacman.mangerBonbon(grille1.tabPlateau);
    pacman.affichPacman();
    console.log(score);
    gagner();
};

function gagner() {
    let bodyAdd = document.body;
    if (grille1.testBonbon() == false) {
        console.log("Vous avez Gagner !!! :)");
        let texteG = document.createElement('h1');
        texteG.appendChild(document.createTextNode("Vous avez GAGNER !!! " + "Avec un score de : " + score));
        bodyAdd.appendChild(texteG);
        clearInterval(numInterval);
    }
};

let numInterval = setInterval(tourDeJeu, 200);