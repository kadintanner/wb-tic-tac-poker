let player = 'X'
let currentPlayer = document.querySelector('#current-player')

function play(evt) {
   const targetsquare = evt.target
   targetsquare.innerText = player
   if (player === 'X') {
   player = 'O'
   } 
   else {player = 'X'}
   currentPlayer.innerText = player
   
   const winner = calculateWinner()
 if (winner) {
     alert (`${winner}"is the winner!"`) 
        } else if (isBoardFull()) {
        alert('Game is a Tie!')
             }
   }

function isBoardFull() {
    for (const square of square) {
        if (square.innerText === '') {
            return false
        }
    }
    return true
}

let squares = document.querySelectorAll('.square')

for (const square of squares) {
    square.addEventListener('click', play) 
}

function calculateWinner() {
const lines = [
    // Horizontal lines
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical lines
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal lines
    [0, 4, 8],
    [2, 4, 6],
  ];
  
for (const line of lines) {
    const [a, b, c,] = line
        const squareAText = squares[a].innerText
        const squareBText = squares[b].innerText
        const squaresCText = squares[c].innerText
if (squareAText !== '' && squareAText === squareBText && squareAText === squaresCText) {
    return squareAText
        }
    }
    return undefined
}

