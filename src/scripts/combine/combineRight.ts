export default function(grid) {

    for (let i = 0; i < 4; i++) {           // Combining nos that are side to side
        
        for (let j = 3; j > 0; j--) {
    
            if(grid[i][j].innerHTML == grid[i][j-1].innerHTML && grid[i][j].innerHTML != " "){
                
                let total = parseInt(grid[i][j-1].innerHTML) + parseInt(grid[i][j].innerHTML);
                grid[i][j].innerHTML = total;

                grid[i][j].animate([
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

                grid[i][j-1].innerHTML = " ";
    
            }
            
        }
        
    }

}