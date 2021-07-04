import gen2 from "./generateRandom";

export default function(){
    const board = document.querySelector(".grid");

    let grid = [];

    for(let i=0;i<4;i++){
        
        let row = [];        
        
        for (let j=0; j<4; j++) {

            let square;
            square = document.createElement('div');
            square.classList.add('grid-element');
            square.innerHTML = "0";
            board.appendChild(square);
            row.push(square);
            
        }
        
        grid.push(row);

    }



    gen2(grid);
    gen2(grid);
    
    return grid;

}