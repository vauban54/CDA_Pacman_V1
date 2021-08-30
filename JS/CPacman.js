class Pacman {
    mX;
    mY;
    mDirection;

    constructor(x, y, direction) {
        this.mX = x;
        this.mY = y;
        this.mDirection = direction;
    };

    affichPacman() {
        let conteneur = document.getElementById('grille');
        let pacmanElem = document.createElement('div');
        pacmanElem.classList.add('pacman');
        conteneur.appendChild(pacmanElem);
        pacmanElem.style.gridArea = this.mY + '/' + this.mX;
        if (this.mDirection == 1) {
            pacmanElem.style.transform = 'rotate(90deg)';
        }
        if (this.mDirection == 2) {
            pacmanElem.style.transform = 'rotate(270deg)';
        }
        if (this.mDirection == 3) {
            pacmanElem.style.transform = 'rotate(0deg)';
        }
        if (this.mDirection == 4) {
            pacmanElem.style.transform = 'rotate(180deg)';
        }
    };

    bougePacman() {
        if (this.mDirection == 1) {
            this.mY++
        }
        if (this.mDirection == 2) {
            this.mY--
        }
        if (this.mDirection == 3) {
            this.mX++
        }
        if (this.mDirection == 4) {
            this.mX--
        }

        if (this.mX > 19) {
            (this.mX = 0) && (this.mY = 11);
        }
        if (this.mX < 0) {
            (this.mX = 19) && (this.mY = 11);
        }
    };

    colisionPacman(tab, tabfantom) {
        if (tab[this.mY - 1][this.mX - 1] == 0) {
            if (this.mDirection == 1) {
                this.mY--
            }
            if (this.mDirection == 2) {
                this.mY++
            }
            if (this.mDirection == 3) {
                this.mX--
            }
            if (this.mDirection == 4) {
                this.mX++
            }
        };
        for (let index = 0; index < tabfantom.length; index++) {
            if (this.mY == tabfantom[index].mY && this.mX == tabfantom[index].mX) {
                clearInterval(numInterval);
                let bodyAdd = document.body;
                let textePP = document.createElement('h3');
                textePP.appendChild(document.createTextNode("PERDU les Fantomes ne se mange pas !!"));
                bodyAdd.appendChild(textePP);
            }
        }
    };

    mangerBonbon(tab) {
        if (tab[this.mY - 1][this.mX - 1] == 2) {
            tab[this.mY - 1][this.mX - 1] = 1;
            score += 10;
        };
    };
}