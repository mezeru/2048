export default function(grid) {

    for (let i = 0; i < 4; i++) {           // Combining nos that are side to side
        
        for (let j = 3; j > 0; j--) {
    
            if(grid[i][j].innerHTML == grid[i][j-1].innerHTML){
                
                let total = parseInt(grid[i][j-1].innerHTML) + parseInt(grid[i][j].innerHTML);
                grid[i][j-1].innerHTML = total;
                grid[i][j].innerHTML = "0";
    
            }
            
        }
        
    }

}