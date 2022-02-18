const btn = document.getElementById('difficulty-btn');



btn.addEventListener('click', function () {

    const grid = document.querySelector(".grid");

    let difficulty = document.getElementById('difficulty').value;

    let cell = 0;
    let columns = 0;


    switch (difficulty) {
        case "1":
            cell = 100;
            columns = 10;
            break;

        case "2":
            cell = 81;
            columns = 9;
            break;

        case "3":
            cell = 49;
            columns = 7;
            break;

        default:
            cell = 100;
            columns = 10;
    }

    grid.innerHTML = '';

    for (let i = 1; i < cell + 1; i++) {
        const cellElement = document.createElement('div');
        grid.append(cellElement);
        cellElement.append(i);
        cellElement.classList.add('cell');

        cellElement.style.width = `calc( 100% / ${columns} )`;
    }

    
})





