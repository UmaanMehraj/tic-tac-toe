const gameBoard = () => {
    const rows = 3, cols = 3
    const board = []

    for (let i = 0; i < rows; i++) {
        board[i] = []

        for (let j = 0; j < cols; j++) {
            board[i].push(Cell())
        }
    }
    const getBoard = () => board;
    const markCell = (column, player) => {

        const availableCells = board.filter(row => row[column].getValue() === '').map(row => row[column])

        if (!availableCells.length) return;

        const row = availableCells.length
        board[row][column].addToken(player)

    }
    const printBoard = () => {
        const boardWithValues = board.map((row) => row.map((cell) => cell.getValue()))
        console.log(boardWithValues)
    }

    return {
        getBoard, markCell, printBoard
    }
}


function Cell() {
    let value = ''

    const addToken = (symbol) => {
        value = symbol
    }

    const getValue = () => value

    return {
        addToken, getValue
    }
}


function gameController(playerOne = 'Player One', playerTwo = 'Player Two') {
    const board = gameBoard()

    const players = [
        {
            name: playerOne,
            token: 'X'
        },
        {
            name: playerTwo,
            token: 'O'
        }
    ]

    let activePlayer = players[0]

    const switchPlayers = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0]
    }

    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        board.printBoard()
        console.log(`${getActivePlayer().name}'s turn`)
    }

    const playRound = (column) => {
        console.log(
            `Dropping ${getActivePlayer().name}'s token into column ${column}...`
        );

        board.markCell(column, getActivePlayer().token)
        switchPlayers()
        printNewRound()
    }

    printNewRound()

    return {
        playRound, getActivePlayer
    }

}

const game = gameController()







