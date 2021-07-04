export default function (grid) {

    for(let i = 0 ; i < 4 ; i++){

        let row = [parseInt(grid[0][i].innerHTML),parseInt(grid[1][i].innerHTML),parseInt(grid[2][i].innerHTML),parseInt(grid[3][i].innerHTML)];
        
        let nonZero = row.filter(num => num);
        let empty = Array(4 - nonZero.length).fill(0);

        let final = empty.concat(nonZero);  // Set elements to extreme right
        
        for (let j = 0; j < 4; j++) {       // Reflect Changes on DOM
            
            grid[j][i].innerHTML = final[j];
            
        }
        
    }
    
}