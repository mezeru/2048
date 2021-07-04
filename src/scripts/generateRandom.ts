export default function gen2 (grid) {
    
    let x = Math.floor(Math.random()*4);
    let y = Math.floor(Math.random()*4);

    if (grid[x][y].innerHTML == " "){
        grid[x][y].innerHTML = "2";
        grid[x][y].animate([
            {
                opacity:"0"
            },
            {
                opacity:"1"
            }
        ],
        {
            duration:1000
        })
    }
    else{
        gen2(grid);
    }
    

}