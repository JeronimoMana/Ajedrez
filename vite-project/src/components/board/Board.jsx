import style from "./Board.module.css";
import Box from "../box/Box";
import { useState } from "react";

const Board = () => {
    const [board, setBoard] = useState({
        size: 8,
        board: [
            [1, 2, 3, 4, 5, 6, 7, 8],  // Fila 0
            [1, 2, 3, 4, 5, 6, 7, 8],  // Fila 1
            [1, 2, 3, 4, 5, 6, 7, 8],  // Fila 2
            [1, 2, 3, 4, 5, 6, 7, 8],  // Fila 3
            [1, 2, 3, 4, 5, 6, 7, 8],  // Fila 4
            [1, 2, 3, 4, 5, 6, 7, 8],  // Fila 5
            [1, 2, 3, 4, 5, 6, 7, 8],  // Fila 6
            [1, 2, 3, 4, 5, 6, 7, 8]   // Fila 7
        ],
        colors: { red: "red", blue: "blue" },
    });

    const renderBox = (cellValue, color) => {
        return <Box key={cellValue} prop={color} />;
    };

    const renderBoard = () => {
        let rows = [];

        for (let i = 0; i < board.size; i++) {
            let color = (i % 2 === 0) ? board.colors.red : board.colors.blue;
            let cells = [];
            for (let j = 0; j < board.size; j++) {
                cells.push(renderBox(j + 1, color));
                color = (color === board.colors.red) ? board.colors.blue : board.colors.red;
            }
            rows.push(<div key={i} className={style.board_row}>{cells}</div>);
        }
        return rows;
    };

    const handleSize = () => {
        const input = document.getElementById("input_size");
        const newSize = parseInt(input.value);

        const newBoard = [];
        for (let i = 0; i < newSize; i++) {
            const newRow = [];
            for (let j = 0; j < newSize; j++) {
                newRow.push(j + 1);
            }
            newBoard.push(newRow);
        }

        setBoard({
            ...board,
            size: newSize,
            board: newBoard
        });
    };

    return (
        <div>
            <div>
                <input id="input_size" type="number" placeholder="Cantidad de filas de su tablero" />
                <button onClick={handleSize}>Cambiar tamaño</button>
            </div>
            <div className={style.container_board}>
                {renderBoard()}
            </div>
        </div>
    );
};

export default Board;
