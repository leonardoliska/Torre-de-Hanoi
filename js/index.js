function createTower() {
    for (let i = 1; i <= 3; i++) {
        // Criar elementos
        const towerContainer = document.createElement("div")
        const towerBase = document.createElement("div")
        const towerColumn = document.createElement("div")

        // Adicionar Classes
        towerContainer.classList.add("tower")
        towerBase.classList.add("x-line")
        towerColumn.classList.add("y-line")

        // Adicionar ID's
        towerContainer.id = `tower-${i}`

        // Adicionar eventListener
        towerContainer.addEventListener('click', towerEventHandler)

        //Posicionar elementos em seus respectivos Parents
        const gameContainer = document.getElementById("game-container")
        gameContainer.appendChild(towerContainer)
        towerContainer.appendChild(towerBase)
        towerContainer.appendChild(towerColumn)
    }
}

function createPieces() {
    for (let i = selectedDifficulty; i >= 1; i--) {

        //Criar elementos
        const piece = document.createElement("div")

        //Adicionar Classes 
        piece.classList.add("piece")

        //Adicionar Cores
        piece.style.backgroundColor = pieceColors[i - 1]

        //Adicionar Width
        piece.style.width = `${(50 / selectedDifficulty) * i + 20}%`

        //Posicionar elementos em seus respectivos Parents
        const tower = document.getElementById("tower-1")
        tower.appendChild(piece)
    }
}

function createGameInfo() {
    // Criar elementos
    const gameInfoConteiner = document.createElement('section')
    const counter = document.createElement('div')
    const resetButton = document.createElement('button')

    // Adicionar ID's
    gameInfoConteiner.id = 'game-info'
    counter.id = 'counter'
    resetButton.id = 'reset-button'

    // Adicionar Texto
    counter.innerText = '0'
    resetButton.innerText = 'Reset'

    // Adicionar eventListener
    resetButton.addEventListener('click', resetGame)

    // Adicionar elementos em seus respectivos parents
    const gameContainer = document.getElementById("game-container")
    gameContainer.appendChild(gameInfoConteiner)
    gameInfoConteiner.appendChild(resetButton)
    gameInfoConteiner.appendChild(counter)
}

function createDifficultyScreen() {

    // Criar elementos
    const difficultyContainer = document.createElement('div')
    const difficultyTitle = document.createElement('h2')
    const easyButton = document.createElement('button')
    const mediumButton = document.createElement('button')
    const hardButton = document.createElement('button')
    const rulesButton = document.createElement('button')

    // Adicionar classes aos elementos
    difficultyTitle.classList.add('difficulty-title')
    easyButton.classList.add('difficulty-button')
    mediumButton.classList.add('difficulty-button')
    hardButton.classList.add('difficulty-button')

    // Adicionar ID's aos elementos
    difficultyContainer.id = 'difficulty-container'
    easyButton.id = 'easy'
    mediumButton.id = 'medium'
    hardButton.id = 'hard'
    rulesButton.id = 'rules-button'

    // Adicionar texto aos Elementos
    difficultyTitle.innerText = 'Selecione a Dificuldade'
    easyButton.innerText = 'Fácil'
    mediumButton.innerText = 'Médio'
    hardButton.innerText = 'Difícil'
    rulesButton.innerText = 'Como Jogar'

    // EventListener
    difficultyContainer.addEventListener('click', selectDifficulty)
    rulesButton.addEventListener('click', toggleRules)

    // Adicionar elementos em seus respectivos Parents
    difficultyContainer.appendChild(rulesButton)
    difficultyContainer.appendChild(difficultyTitle)
    difficultyContainer.appendChild(easyButton)
    difficultyContainer.appendChild(mediumButton)
    difficultyContainer.appendChild(hardButton)


    const gameContainer = document.getElementById('game-container')
    gameContainer.appendChild(difficultyContainer)
}

function selectDifficulty(event) {
    if (event.target.className === "difficulty-button") {
        const difficulty = event.target.id

        switch (difficulty) {
            case 'easy':
                selectedDifficulty = 3
                break

            case 'medium':
                selectedDifficulty = 5
                break

            case 'hard':
                selectedDifficulty = 7
                break

            default: {
                selectedDifficulty = 3
            }
        }
        // Criar os elementos após selecionar a dificuldade
        document.getElementById('game-container').innerHTML = ''
        createTower()
        createPieces()
        createGameInfo()
    }
}

function resetGame() {
    const gameContainer = document.getElementById('game-container')
    gameContainer.innerHTML = ''
    counter = 0
    createDifficultyScreen()
}

function victoryPopUp() {
    // Criar elementos
    const victoryContainer = document.createElement('div')
    const victoryText = document.createElement('h2')
    const closeButton = document.createElement('button')

    // Adicionar classes e ID's
    victoryContainer.id = 'victory-container'
    victoryContainer.classList.add('pop-up')
    victoryText.classList.add('victoryText')

    // Adicionar texto
    victoryText.innerText = 'Você Venceu!'
    closeButton.innerText = 'Fechar'

    // Adicionar eventListener
    closeButton.addEventListener('click', closePopUp)

    // Adicionar elementos em seus respectivos parents
    victoryContainer.appendChild(victoryText)
    victoryContainer.appendChild(closeButton)
    const body = document.querySelector('body')
    body.appendChild(victoryContainer)
}

function closePopUp(event) {
    event.target.parentElement.remove()
}

function updateCounter() {
    counter++
    const counterElement = document.querySelector('#counter')
    counterElement.innerText = counter
}


function checkVitory() {
    // Verifica se as torre 2 e torre 3 possuem todas as peças para anunciar a vitória
    const towers = document.querySelectorAll('.tower')
    for (let i = 1; i <= 2; i++) {
        const towerPieces = towers[i].querySelectorAll('.piece')
        if (towerPieces.length == selectedDifficulty) {
            victoryPopUp()
            for (let j = 0; j < towers.length; j++) {
                towers[j].removeEventListener("click", towerEventHandler)
            }
        }
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
            updateCounter()
        }
    }
    checkVitory()
}

function toggleRules() {
    const rulesContainer = document.querySelector('#rules-container')
    rulesContainer.classList.toggle('hidden')
}

let selectedDifficulty = 4
let counter = 0
const pieceColors = ["#000", "#242424", "#494949", "#727272", "#979797", "#d5d5d5", "#fff"]

// Adicionar eventListener para fechar regras
const rulesCloseButton = document.querySelector('#rules-container button')
rulesCloseButton.addEventListener('click', toggleRules)

resetGame()