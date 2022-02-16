const btn = document.getElementById('difficulty-btn');



btn.addEventListener('click',function(){

    const grid = document.querySelector(".grid");

    let difficulty= document.getElementById('difficulty').value;

    let cell
    let columns
    
    switch (difficulty) {
        case "1" :
            cell = 100;
            columns = 10;
        break;
    
        case "2" :
            cell= 81;
            columns = 9;
        break;
    
        case "3" :
            cell= 49;
            columns= 7;
        break;
    
        default :
            console.log('1')
    }

    for( let i=1; i<cell+1; i++ ){
        let cellElement = document.createElement('div');
        grid.append(cellElement);
        cellElement.classList.add('cell');
        cellElement.style.width= `calc( 400px / ${columns})`;
        cellElement.style.height= `30px`;
    }
})



