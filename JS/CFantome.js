class Fantome {

    mX;
    mY;
    mDirection;

    constructor(x, y, direction) {
        this.mX = x;
        this.mY = y;
        this.mDirection = direction;
    }

    affichFantom(num) {
        let conteneur = document.getElementById('grille');
        let fantomElem = document.createElement('div');
        fantomElem.classList.add('fantom' + num);
        conteneur.appendChild(fantomElem);
        fantomElem.style.gridArea = this.mY + '/' + this.mX;
    };

    bougefantom() {
        // Les
        this.mDirection = Math.round(Math.random() * 4) % 4 + 1;
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

    colisionfantom(grille, pacman) {
        if (grille[this.mY - 1][this.mX - 1] == 0) {
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
            // tabfantoms[num].direction = Math.round(Math.random() * 3) % 4 + 1;
        }
        if ((this.mY - 1 == pacman.mY - 1) && (this.mX - 1 == pacman.mX - 1)) {
            let bodyAdd = document.body;
            let textePF = document.createElement('h2');
            textePF.appendChild(document.createTextNode("PERDU un Fantome à voulu faire un POGO !!"));
            bodyAdd.appendChild(textePF);
            clearInterval(numInterval);
            alert('GAME OVER');
        }
    };

}