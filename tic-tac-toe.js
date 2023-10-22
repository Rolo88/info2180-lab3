window.onload = function(){
    
    const board = document.getElementById('board');
    const divs = board.querySelectorAll('div');
    
    
    divs.forEach(div =>{
        div.classList.add('square')
    });

}



