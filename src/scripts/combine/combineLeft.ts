import anime from "animejs";

export default function(grid) {

    for (let i = 0; i < 4; i++) {           // Combining nos that are side to side
        
        for (let j = 0; j < 3; j++) {
    
            if(grid[i][j].innerHTML == grid[i][j+1].innerHTML && grid[i][j].innerHTML != " "){
                
                let total = parseInt(grid[i][j+1].innerHTML) + parseInt(grid[i][j].innerHTML);
                grid[i][j].innerHTML = total;

                anime({
                    targets:grid[i][j],
                    scale:1.2,
                    direction:'alternate',
                    duration:100,
                    easing: 'easeInOutSine'
                })


                grid[i][j+1].innerHTML = " ";
    
            }
            
        }
        
    }

}