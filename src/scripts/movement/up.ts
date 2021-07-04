export default function (grid) {

    for(let i = 0 ; i < 4 ; i++){

        let row = [parseInt(grid[0][i].innerHTML),parseInt(grid[1][i].innerHTML),parseInt(grid[2][i].innerHTML),parseInt(grid[3][i].innerHTML)];
        
        let nonZero = row.filter(num => num);
        let empty = Array(4 - nonZero.length).fill(0);

        let final = nonZero.concat(empty);  // Set elements to extreme right
        
        for (let j = 0; j < 4; j++) {       // Reflect Changes on DOM
            
            grid[j][i].innerHTML = final[j];
            
        }
        
    }

    for (let i = 1; i < 4; i++) {           // Combining nos that are side to side
        
        for (let j = 0; j < 4; j++) {

            if(grid[i-1][j].innerHTML == grid[i][j].innerHTML){
                
                let total = parseInt(grid[i-1][j].innerHTML) + parseInt(grid[i][j].innerHTML);
                grid[i-1][j].innerHTML = total;
                grid[i][j].innerHTML = " ";
                continue;

            }
            
        }
        
    }

    
}