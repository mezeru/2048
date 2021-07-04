export default function gen2 (grid) {
    
    let x = Math.floor(Math.random()*4);
    let y = Math.floor(Math.random()*4);

    if (grid[x][y].innerHTML == 0){
        grid[x][y].innerHTML = "2";
    }
    else{
        gen2(grid);
    }
    

}