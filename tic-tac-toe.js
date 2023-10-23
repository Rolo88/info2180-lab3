window.onload = function () {
    const board = document.getElementById('board');
    const status = document.getElementById('status');
    const restartButton = document.querySelector('.btn'); // Select the button by its class
    const gameState = new Array(9).fill('');
    let currentPlayer = 'X';
    let gameOver = false;
  
    // Set the initial status message
    status.textContent = 'Move your mouse over a square and click to play an X or an O.';
  
    // Create the 3x3 grid and add squares
    for (let i = 0; i < 9; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      board.appendChild(square);
  
      square.addEventListener('click', function () {
        if (!gameState[i] && !gameOver) {
          square.textContent = currentPlayer;
          square.classList.add(currentPlayer);
          gameState[i] = currentPlayer;
          
          if (checkForWin(currentPlayer)) {
            status.textContent = `Congratulations! ${currentPlayer} is the Winner!"`;
            gameOver = true;
          } else if (gameState.every(value => value !== '')) {
            status.textContent = 'It\'s a draw!';
            gameOver = true;
          }
  
          // Toggle the current player after the move
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      });
  
      square.addEventListener('mouseenter', function () {
        square.classList.add('hover');
      });
  
      square.addEventListener('mouseleave', function () {
        square.classList.remove('hover');
      });
    }
  
    restartButton.addEventListener('click', function () {
      resetGame();
    });
  
    function resetGame() {
      for (let i = 0; i < 9; i++) {
        const square = board.children[i];
        square.textContent = '';
        square.classList.remove('X', 'O');
        gameState[i] = '';
      }
  
      status.textContent = 'Move your mouse over a square and click to play an X or an O.';
      gameOver = false;
      currentPlayer = 'X';
    }
  
    function checkForWin(player) {
      // Define your win conditions here (rows, columns, diagonals)
      const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
  
      for (const condition of winConditions) {
        const [a, b, c] = condition;
        if (gameState[a] === player && gameState[b] === player && gameState[c] === player) {
          return true;
        }
      }
      
      return false;
    }
  };
  