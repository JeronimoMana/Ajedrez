import style from "./Board.module.css";
import Box from "../box/Box";


const Board = () => {
    const BOARD = [
        [1, 2, 3, 4, 5, 6, 7, 8],  // Fila 0
        [1, 2, 3, 4, 5, 6, 7, 8],  // Fila 1
        [1, 2, 3, 4, 5, 6, 7, 8],  // Fila 2
        [1, 2, 3, 4, 5, 6, 7, 8],  // Fila 3
        [1, 2, 3, 4, 5, 6, 7, 8],  // Fila 4
        [1, 2, 3, 4, 5, 6, 7, 8],  // Fila 5
        [1, 2, 3, 4, 5, 6, 7, 8],  // Fila 6
        [1, 2, 3, 4, 5, 6, 7, 8]   // Fila 7
    ]


    const renderBox = (color) => {
        return (
            <div>
                <Box color={color} />
            </div>
        )
    }


    const renderBoard = () => {
        const rows = []
        for (let i = 0; i < BOARD.length; i++) {
            const cell = []
            let color = ""
            if (i % 2 === 0) {
                color = "white"
            } else {
                color = "black"
            }
            console.log(color)
            for (let j = 0; j < BOARD.length; j++) {
                cell.push(renderBox(color))
                if (color === "white") {
                    color = "black"
                } else {
                    color = "white"
                }
            }
            rows.push(cell)
        }
        return rows
    }


    return (
        <div>
            <div className={style.container_board}>
                {renderBoard()}
            </div>
        </div>
    );
};

export default Board;
