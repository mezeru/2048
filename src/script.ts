import createBoard from "./scripts/createBoard";
import right from "./scripts/movement/right";
import left from "./scripts/movement/left";
import down from "./scripts/movement/down"
import up from "./scripts/movement/up";

let grid = createBoard();
up(grid);