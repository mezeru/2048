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

const scoreSpan = document.querySelector('.score')

let score = 0;
let grid = createBoard();

document.addEventListener("keyup",(e) => {

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

});

const isWin = () => {
    
    if (checkWin(grid)){
       //win
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