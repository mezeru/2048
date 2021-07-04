export default function gen2 (grid) {
   
    try{
    
    let x = Math.floor(Math.random()*4);
    let y = Math.floor(Math.random()*4);

    if (grid[x][y].innerHTML == " "){
        grid[x][y].innerHTML = "2";
        grid[x][y].animate([
            {
                opacity:"0.5",
                backgroundColor:"black"
            },
            {
                opacity:"1",
                backgroundColor:"none"
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
    catch{
        null;
    }
    

}