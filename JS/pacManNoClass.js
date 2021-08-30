let tab = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0],
    [0, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 0],
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [0, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 0],
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
    [0, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0],
    [0, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 2, 0, 0],
    [0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

// let tab = [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//     [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
//     [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
//     [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//     [0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
//     [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
//     [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
//     [0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 2, 2, 0, 1, 0, 1, 1, 0],
//     [0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0],
//     [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
//     [0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0],
//     [0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0],
//     [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
//     [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//     [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
//     [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
//     [0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
//     [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
//     [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
//     [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// ];


function plateau() {

    for (let y = 0; y < tab.length; y++) {


        for (let x = 0; x < tab[y].length; x++) {

            // On se met dans la div class="grille"
            let conteneur = document.getElementById('grille');
            // Si Valeur du Tableau est égal à : 0
            if (tab[y][x] == 0) {
                // On crée une div 
                let murelem = document.createElement('div');
                // On place la case en (x/y) ( On met "y+1" car l'index du tableau commence à 0 et celui du grid commence à 1 )
                murelem.style.gridArea = (y + 1) + '/' + (x + 1);
                // On donne la class"mur" à la div
                murelem.classList.add('mur');
                // On ajoute la nouvelle div class="mur" dans la div class="conteneur" 
                conteneur.appendChild(murelem);
            };
            // Si Valeur du Tableau est égal à : 1
            if (tab[y][x] == 1) {
                let solelem = document.createElement('div');
                // On place la case en (x/y) 
                solelem.style.gridArea = (y + 1) + '/' + (x + 1);
                solelem.classList.add('sol');
                conteneur.appendChild(solelem);
            };
            // Si Valeur du Tableau est égal à : 2
            if (tab[y][x] == 2) {
                let bonbonelem = document.createElement('div');
                // On place la case en (x/y) 
                bonbonelem.style.gridArea = (y + 1) + '/' + (x + 1);
                bonbonelem.classList.add('bonbon');
                conteneur.appendChild(bonbonelem);
            };
        }


    };



};
// On crée un Objet pacman
let pacman = {
    x: 10,
    y: 9,
    direction: 0
}
let score = 0;
let tabfantoms = [
    {
        x: 5,
        y: 5,
        direction: 1
    },
    {
        x: 15,
        y: 15,
        direction: 0
    },
    {
        x: 5,
        y: 15,
        direction: 0
    },
    {
        x: 15,
        y: 5,
        direction: 0
    }

];

function affichPacman() {
    // On se met dans la div class="grille"
    let conteneur = document.getElementById('grille');
    let pacmanElem = document.createElement('div');
    pacmanElem.classList.add('pacman');
    conteneur.appendChild(pacmanElem);
    pacmanElem.style.gridArea = pacman.y + '/' + pacman.x;
};
function affichFantom(num) {
    let conteneur = document.getElementById('grille');
    let fantomElem = document.createElement('div');
    fantomElem.classList.add('fantom' + num);
    conteneur.appendChild(fantomElem);
    fantomElem.style.gridArea = tabfantoms[num].y + '/' + tabfantoms[num].x;
};
function bougePacman() {
    if (pacman.direction == 1) {
        pacman.y++
    }
    if (pacman.direction == 2) {
        pacman.y--
    }
    if (pacman.direction == 3) {
        pacman.x++
    }
    if (pacman.direction == 4) {
        pacman.x--
    }

    if (pacman.x > 19) {
        pacman.x = 0;
    }
    if (pacman.x < 0) {
        pacman.x = 19;
    }

};
function bougefantom(num) {
    // Les
    tabfantoms[num].direction = Math.round(Math.random() * 4) % 4 + 1;
    if (tabfantoms[num].direction == 1) {
        tabfantoms[num].y++
    }
    if (tabfantoms[num].direction == 2) {
        tabfantoms[num].y--
    }
    if (tabfantoms[num].direction == 3) {
        tabfantoms[num].x++
    }
    if (tabfantoms[num].direction == 4) {
        tabfantoms[num].x--
    }

    if (tabfantoms[num].x > 19) {
        tabfantoms[num].x = 0;
    }
    if (tabfantoms[num].x < 0) {
        tabfantoms[num].x = 19;
    }

};


function toucheDirectionel(event) {
    console.log(event);
    switch (event.code) {
        case 'ArrowUp':
            pacman.direction = 2;
            break;
        case 'ArrowDown':
            pacman.direction = 1;
            break;
        case 'ArrowLeft':
            pacman.direction = 4;
            break;
        case 'ArrowRight':
            pacman.direction = 3;
            break;
        default:
            Node;
    }
}
function colisionPacman() {
    if (tab[pacman.y - 1][pacman.x - 1] == 0) {
        if (pacman.direction == 1) {
            pacman.y--
        }
        if (pacman.direction == 2) {
            pacman.y++
        }
        if (pacman.direction == 3) {
            pacman.x--
        }
        if (pacman.direction == 4) {
            pacman.x++
        }

    }
    // if ((tabfantoms[num].y == pacman.y) && (tabfantoms[num].x == pacman.x)){
    //         console.log('PERDU');
    //        alert('Pas cool');   
    //        }
};
function colisionfantom(num) {
    if (tab[tabfantoms[num].y - 1][tabfantoms[num].x - 1] == 0) {
        if (tabfantoms[num].direction == 1) {
            tabfantoms[num].y--
        }
        if (tabfantoms[num].direction == 2) {
            tabfantoms[num].y++
        }
        if (tabfantoms[num].direction == 3) {
            tabfantoms[num].x--
        }
        if (tabfantoms[num].direction == 4) {
            tabfantoms[num].x++
        }


        // tabfantoms[num].direction = Math.round(Math.random() * 3) % 4 + 1;
    }
    if ((tabfantoms[num].y - 1 == pacman.y - 1) && (tabfantoms[num].x - 1 == pacman.x - 1)) {
        clearInterval(numInterval);
        alert('GAME OVER');
    }
};
function mangerBonbon() {
    if (tab[pacman.y - 1][pacman.x - 1] == 2) {
        tab[pacman.y - 1][pacman.x - 1] = 1;
        score += 10;
    }
}
function gagner() {
    let bodyAdd = document.body;

    if (testBonbon() == false) {
        console.log("Vous avez Gagner !!! :)");
        let texteG = document.createElement('h1');
        texteG.appendChild(document.createTextNode("Vous avez GAGNER !!!"));
        bodyAdd.appendChild(texteG);
        clearInterval(numInterval);

    }
}
document.body.addEventListener("keydown", toucheDirectionel);
function tourDeJeu() {

    plateau();

    bougePacman();
    for (let i = 0; i < tabfantoms.length; i++) {
        bougefantom(i);
        colisionfantom(i);
        affichFantom(i);
    }
    colisionPacman();
    mangerBonbon();
    affichPacman();

    console.log(score);
    gagner();
};

function testBonbon() {
    let bonbon = 0;
    for (let y = 0; y < tab.length; y++) {

        for (let x = 0; x < tab[y].length; x++) {
            if (tab[y][x] == 2) {
                bonbon++;
            } else { };
        };
    };
    if (bonbon == 0) {
        return false;
    }
};
let numInterval = setInterval(tourDeJeu, 200);