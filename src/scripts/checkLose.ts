export default function (grid){

    for(let i=0 ; i < 4 ; i++){
        for (let j = 0; j < 4; j++) {
            if(grid[i][j] != null){
                return true;
            }            
        }
    }
    return false;

}