export default function(grid) {

    for (let i = 1; i < 4; i++) {           // Combining nos that are side to side
        
        for (let j = 0; j < 4; j++) {
    
            if(grid[i][j].innerHTML == grid[i-1][j].innerHTML && grid[i][j].innerHTML != " "){
                
                let total = parseInt(grid[i-1][j].innerHTML) + parseInt(grid[i][j].innerHTML);
                grid[i-1][j].innerHTML = total;

                grid[i-1][j].animate([
                    {
                        opacity:"0",
                        backgroundColor:"white"
                    },
                    {
                        opacity:"1",
                        backgroundColor:"none"
                    }
                ],
                {
                    duration:700
                });

                grid[i][j].innerHTML = " ";
    
            }
            
        }
        
    }

}