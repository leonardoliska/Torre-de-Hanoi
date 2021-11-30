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

        //Posicionar elementos em seus respectivos Parents
        towerContainer.appendChild(towerBase)
        towerContainer.appendChild(towerColumn)
        const gameContainer = document.getElementById("game-container")
        gameContainer.appendChild(towerContainer)
    }
}

let dificulty = 4
const pieceColors = ["#F00", "#0F0", "#00F", "#F0F"]

function createPieces(){
    for (let i = 1; i <= dificulty; i++){

        //Criar elementos
        const piece = document.createElement("div")

        //Adicionar Classes 
        piece.classList.add("piece")

        //Adicionar Cores
        piece.style.backgroundColor = pieceColors[i-1]

        //Adicionar Width
        piece.style.width = `${(40 / dificulty) * i + 20}%`

        //Posicionar elementos em seus respectivos Parents
        const tower = document.getElementById("tower-1")
        tower.appendChild(piece)
    }
}

function createDifficultyScreen() {
    
    // Criar elementos
    const difficultyContainer = document.createElement('div')
    const difficultyTitle = document.createElement('h2')
    const easyButton = document.createElement('button')
    const mediumButton = document.createElement('button')
    const hardButton = document.createElement('button')

    // Adicionar classes e ID's aos elementos
    difficultyContainer.id = 'difficulty'
    difficultyTitle.classList.add('difficulty-title')
    easyButton.classList.add('difficulty-button')
    mediumButton.classList.add('difficulty-button')
    hardButton.classList.add('difficulty-button')

    // Adicionar texto aos Elementos
    difficultyTitle.innerText = 'Selecione a Dificuldade'
    easyButton.innerText = 'Fácil'
    mediumButton.innerText = 'Médio'
    hardButton.innerText = 'Difícil'

    // Adicionar elementos em seus respectivos Parents
    difficultyContainer.appendChild(difficultyTitle)
    difficultyContainer.appendChild(easyButton)
    difficultyContainer.appendChild(mediumButton)
    difficultyContainer.appendChild(hardButton)

    const gameContainer = document.getElementById('game-container')
    gameContainer.appendChild(difficultyContainer)
}
