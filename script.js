const GameBoard = function createBoard() {
    const gameBoard = []
    const addMarker = (symbol, pos) => {
        if (pos >= 1 && pos <= 9) {
            gameBoard[pos] = symbol
        }
    }
    return { gameBoard, addMarker }
}()

const Player = function createPlayer(name = 'player', symbol) {
    let score = 0
    const getScore = () => score
    const increaseScore = () => { ++score }

    return { name, getScore, increaseScore, symbol }
}



const game = function startGame() {
    const playerOne = Player('x')
    const playerTwo = Player('o')
}