export default function (grid) {

    for(let i = 0 ; i < 4 ; i++){

        let row = [parseInt(grid[i][0].innerHTML),parseInt(grid[i][1].innerHTML),parseInt(grid[i][2].innerHTML),parseInt(grid[i][3].innerHTML)];
        
        let nonZero = row.filter(num => num);
        let empty = Array(4 - nonZero.length).fill(" ");

        let final = nonZero.concat(empty);  // Set elements to extreme right
        
        for (let j = 0; j < 4; j++) {       // Reflect Changes on DOM
            
            grid[i][j].innerHTML = final[j];
            
        }
        
    }

    
}