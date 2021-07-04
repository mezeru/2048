import createBoard from "./scripts/createBoard";
import './style.scss'
import right from "./scripts/movement/right";
import left from "./scripts/movement/left";
import down from "./scripts/movement/down"
import up from "./scripts/movement/up";
import gen2 from "./scripts/generateRandom";
import combineRight from "./scripts/combine/combineRight";
import combineLeft from "./scripts/combine/combineLeft";
import combineUp from "./scripts/combine/combineUp";
import combineDown from "./scripts/combine/combineDown";
import checkWin from "./scripts/checkWin";
import checkLose from "./scripts/checkLose";

const scoreSpan = document.querySelector('.score');
const board = document.getElementById('board');
const winner = document.getElementById('winner');

let score = 0;
let grid = createBoard();
let won = false;

document.addEventListener("keydown",(e) => {
    

    e.preventDefault();

  if(!won){  

    if(e.key == 'ArrowLeft' || e.key == 'a'){
        left(grid);
        combineLeft(grid);
        left(grid);
        comCall();
    }

    if(e.key == 'ArrowRight'  || e.key == 'd'){
        right(grid);
        combineRight(grid);
        right(grid);
        comCall();

    }

    if(e.key == 'ArrowUp' || e.key == 'w'){

        up(grid);
        combineUp(grid);
        up(grid);
        comCall();

    }

    if(e.key == 'ArrowDown' || e.key == 's'){

        down(grid);
        combineDown(grid);
        down(grid);
        comCall();
    }

  }

});

const isWin = () => {
    
    if (checkWin(grid)){
        won = true;
        board.style.filter = "blur(15px)";
        winner.style.animation = "opac 1s";
        winner.style.opacity = "1";
        
    }

}


const isLose = () => {
    
    if (!checkLose(grid)){
       console.log("lose")
    }

}

const comCall = () => {

    gen2(grid);
    isWin();
    isLose();
    score = score+1;
    scoreSpan.innerHTML = score.toString();

}


document.querySelector('.newgame').addEventListener("click",()=>{

    for(let i=0 ; i<4 ; i++){
        for(let j=0 ; j<4 ; j++){
            grid[i][j].innerHTML = " ";
        }
    }

    winner.style.opacity="0";
    board.style.filter = "blur(0px)";
    gen2(grid);
    gen2(grid);
    score = 0;
    scoreSpan.innerHTML = score.toString();
    won = false;
    
});