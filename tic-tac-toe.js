window.onload = function () {
    const board = document.getElementById('board');
    const gameState = new Array(9).fill('');
    let currentPlayer = 'X';
  
    // Create the 3x3 grid and add squares
    for (let i = 0; i < 9; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      board.appendChild(square);
    }
  
    const squares = board.querySelectorAll('.square');
  
    squares.forEach((square, index) => {
      square.addEventListener('click', function () {
        if (!gameState[index] && !isGameOver()) {
          square.textContent = currentPlayer;
          square.classList.add(currentPlayer);
          gameState[index] = currentPlayer;
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      });
    });
  
    function isGameOver() {
      // Implement your game logic to check for a win condition here
      // Return true if the game is over, and false otherwise
    }
  };


