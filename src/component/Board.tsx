import { LEVELS } from "../utils/Constant";
import Cell from "./Cell";

interface BoardProps{
    level: keyof typeof LEVELS;
}
function Board({ level }: BoardProps) {
    const cells = [];

    for (let i: number = 0; i < LEVELS[level].ROWS; i++) {
        const columns = [];
        for (let j = 0; j < LEVELS[level].COLUMNS; j++) {
            columns.push(<Cell key={`${i}-${j}`}></Cell>);
        }
        cells.push(
            <div key={i} style={{ display: 'flex', flexDirection: 'row'}}>
                {columns}
            </div>
        );
    }
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column'}}>
            {cells}
        </div>
    );
}

export default Board;