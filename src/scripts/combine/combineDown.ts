export default function(grid) {

    for (let i = 3; i > 0; i--) {           // Combining nos that are side to side
        
        for (let j = 0; j < 4; j++) {
    
            if(grid[i][j].innerHTML == grid[i-1][j].innerHTML && grid[i][j].innerHTML != " "){
                
                let total = parseInt(grid[i-1][j].innerHTML) + parseInt(grid[i][j].innerHTML);
                grid[i][j].innerHTML = total;
                grid[i][j].animate([
                    {
                        opacity:"0",
                        backgroundColor:"white"
                    },
                    {
                        opacity:"1"
                    }
                ],
                {
                    duration:700
                });
                grid[i-1][j].innerHTML = " ";
    
            }
            
        }
        
    }

}