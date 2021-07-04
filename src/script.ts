import createBoard from "./scripts/createBoard";
import right from "./scripts/movement/right";
import left from "./scripts/movement/left";
import down from "./scripts/movement/down"
import up from "./scripts/movement/up";
import gen2 from "./scripts/generateRandom";
import combineRight from "./scripts/combine/combineRight";
import combineLeft from "./scripts/combine/combineLeft";
import combineUp from "./scripts/combine/combineUp";
import combineDown from "./scripts/combine/combineDown";

let grid = createBoard();

document.addEventListener("keyup",(e) => {

    if(e.key == 'ArrowLeft'){
        left(grid);
        combineLeft(grid);
        left(grid);
        gen2(grid);
    }

    if(e.key == 'ArrowRight'){
        right(grid);
        combineRight(grid);
        right(grid);
        gen2(grid);
    }

    if(e.key == 'ArrowUp'){
        up(grid);
        combineUp(grid);
        up(grid);
        gen2(grid);
    }

    if(e.key == 'ArrowDown'){
        down(grid);
        combineDown(grid);
        down(grid);
        gen2(grid);
    }

});