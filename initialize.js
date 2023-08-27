function create_board(){
    time_elapsed();
    reset_all();
    gameBoard.innerHTML = '';
    heldBoard.innerHTML = '';
    queueBoard.innerHTML = '';
    var table = document.createElement('table');
    for(var i = 1; i <= board.row; i++){
        var row = document.createElement('tr');
        for(var j = 1; j <= board.col; j++){
            var cell = document.createElement('td');
            cell.id = hash(i, j);
            cell.backgroundColor = "black";
            row.appendChild(cell);
        }
        table.appendChild(row);
    } 
    gameBoard.appendChild(table);
    table = document.createElement('table');
    for(var i = 1; i <= board.hold_row; i++){
        var row = document.createElement('tr');
        for(var j = 1; j <= board.hold_col; j++){
            var cell = document.createElement('td');
            cell.id = hash(i + board.row, j);
            cell.backgroundColor = "black";
            row.appendChild(cell);
        }
        table.appendChild(row);
    } 
    heldBoard.appendChild(table);
    table = document.createElement('table');
    for(var i = 1; i <= board.queue_row; i++){
        var row = document.createElement('tr');
        for(var j = 1; j <= board.queue_col; j++){
            var cell = document.createElement('td');
            cell.id = hash(i + board.queue_row, j);
            cell.backgroundColor = "black";
            row.appendChild(cell);
        }
        table.appendChild(row);
    } 
    queueBoard.appendChild(table);
}

function shuffle(array){
    var size = array.length;
    for(var i = 0; i < size - 1; i++){
        var id = rng(i + 1, size - 1);
        var tmp = array[i];
        array[i] = array[id];
        array[id] = tmp;
    }
    return array;
}

function generate_bag(){
    let bag = [];
    for(var i = 1; i <= 7; i++) bag.push(i);
    bag = shuffle(bag);
    return bag;
}

function create_bag(){ 
    for(var i = 1; i <= board.num_bag; i++){
        let bag = generate_bag();
        for(var j = 0; j < 7; j++) piece.push(bag[j]);
    }
    moveable = true;
    add_queue(cur_piece);
    current_piece(cur_piece);
}