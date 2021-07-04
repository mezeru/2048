export default function (grid) {

    for(let i = 0 ; i < 4 ; i++){

        for (let j = 0; j < 3; j++) {
            
            if (grid[i][j+1].innerHTML == "0"){
                grid[i][j+1].innerHTML = grid[i][j].innerHTML;
                grid[i][j].innerHTML = "0";
            }
            
        }

    }
    
}