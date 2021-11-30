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
        piece.style.width = piece.style.width = `${(40 / dificulty) * i + 20}%`

        //Adicionar EventListener
        piece.addEventListener("click", selectPiece)

        //Posicionar elementos em seus respectivos Parents
        const tower = document.getElementById("tower-1")
        tower.appendChild(piece)
    }
}


function selectPiece (event){
    console.log(event.target)

    const piece = event.target
    isPieceAbove(piece)

}

function isPieceAbove(piece){
    if(piece.parentNode.querySelectorAll(".piece")[0]==piece) {  
        console.log("acima")       
        return true
    }else{
        console.log("abaixo")
        return false
    }
}



createTower()
createPieces()