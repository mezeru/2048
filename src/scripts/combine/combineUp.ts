import anime from "animejs";

export default function(grid) {

    for (let i = 1; i < 4; i++) {           // Combining nos that are side to side
        
        for (let j = 0; j < 4; j++) {
    
            if(grid[i][j].innerHTML == grid[i-1][j].innerHTML && grid[i][j].innerHTML != " "){
                
                let total = parseInt(grid[i-1][j].innerHTML) + parseInt(grid[i][j].innerHTML);
                grid[i-1][j].innerHTML = total;

                anime({
                    targets:grid[i-1][j],
                    scale:1.2,
                    direction:'alternate',
                    duration:200,
                    easing: 'easeInOutSine'
                })


                grid[i][j].innerHTML = " ";
    
            }
            
        }
        
    }

}