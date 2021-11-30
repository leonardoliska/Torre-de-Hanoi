function createTower() {
    for (let i = 1; i <= 3; i++) {
        // Criar elementos
        const towerContainer = document.createElement("div")
        const towerBase = document.createElement("div")
        const towerColumn = document.createElement("div")

        // Adicionar Classes e Ids
        towerContainer.classList.add("tower")
        towerContainer.id = `tower-${i}`
        towerBase.classList.add("x-line")
        towerColumn.classList.add("y-line")

        // Adicionar eventListener
        towerContainer.addEventListener('click', towerEventHandler)
        
        //Posicionar elementos em seus respectivos Parents
        towerContainer.appendChild(towerBase)
        towerContainer.appendChild(towerColumn)
        const gameContainer = document.getElementById("game-container")
        gameContainer.appendChild(towerContainer)

    }
}

function createPieces(){
    for (let i = dificulty; i >= 1; i--){

        //Criar elementos
        const piece = document.createElement("div")

        //Adicionar Classes 
        piece.classList.add("piece")

        //Adicionar Cores
        piece.style.backgroundColor = pieceColors[i-1]

        //Adicionar Width
        piece.style.width = piece.style.width = `${(40 / dificulty) * i + 20}%`

        //Adicionar EventListener
        // piece.addEventListener("click", selectPiece)

        //Posicionar elementos em seus respectivos Parents
        const tower = document.getElementById("tower-1")
        tower.appendChild(piece)
    }
}

function createPieces2(){
    for (let i = dificulty; i >= 1; i--){

        //Criar elementos
        const piece = document.createElement("div")

        //Adicionar Classes 
        piece.classList.add("piece")

        //Adicionar Cores
        piece.style.backgroundColor = pieceColors[i-1]

        //Adicionar Width
        piece.style.width = piece.style.width = `${(40 / dificulty) * i + 20}%`

        //Adicionar EventListener
        // piece.addEventListener("click", selectPiece)

        //Posicionar elementos em seus respectivos Parents
        const tower = document.getElementById("tower-2")
        tower.appendChild(piece)
    }
}

function towerEventHandler(event) {
    
    const currentTower = event.currentTarget
    const currentTowerPieces = currentTower.querySelectorAll('.piece')
    const currentTowerUpperPiece = currentTowerPieces[currentTowerPieces.length - 1]
    const selectedPiece = document.querySelector('.piece-selected')

    if (currentTowerPieces.length !== 0) {
        if (selectedPiece !== null) {
            if (currentTower === selectedPiece.parentElement) {
                selectedPiece.classList.remove('piece-selected')
            }
        }
        else {
            currentTowerUpperPiece.classList.add('piece-selected')
        }
    }
    
    if (selectedPiece !== null) {
        if (currentTowerPieces.length === 0 || selectedPiece.clientWidth < currentTowerUpperPiece.clientWidth) {
            currentTower.appendChild(selectedPiece)
            selectedPiece.classList.remove('piece-selected')
        }
    }
}

let dificulty = 4
const pieceColors = ["#F00", "#0F0", "#00F", "#F0F"]

createTower()
createPieces()