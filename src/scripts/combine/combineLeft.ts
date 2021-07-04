export default function(grid) {

    for (let i = 0; i < 4; i++) {           // Combining nos that are side to side
        
        for (let j = 0; j < 4; j++) {
    
            if(grid[i][j].innerHTML == grid[i][j+1].innerHTML && grid[i][j].innerHTML != " "){
                
                let total = parseInt(grid[i][j+1].innerHTML) + parseInt(grid[i][j].innerHTML);
                grid[i][j].innerHTML = total;

                grid[i][j].animate([
                    {
                        opacity:"0"
                    },
                    {
                        opacity:"1"
                    }
                ],
                {
                    duration:500
                })

                grid[i][j+1].innerHTML = " ";
    
            }
            
        }
        
    }

}