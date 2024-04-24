import Box from "./Box";
//piezas negras
import aN from "../assets/img/chesspieces/alpha/bB.png"
import pN from "../assets/img/chesspieces/alpha/bP.png"
import rN from "../assets/img/chesspieces/alpha/bK.png"
import dN from "../assets/img/chesspieces/alpha/bQ.png"
import tN from "../assets/img/chesspieces/alpha/bR.png"
import cN from "../assets/img/chesspieces/alpha/bN.png"

const Board = () => {
    const BOARD = [
        [tN, cN, aN, dN, rN, aN, cN, tN],  // Fila 0
        [pN, pN, pN, pN, pN, pN, pN, pN],  // Fila 1
        [1, 2, 3, 4, 5, 6, 7, 8],  // Fila 2
        [1, 2, 3, 4, 5, 6, 7, 8],  // Fila 3
        [1, 2, 3, 4, 5, 6, 7, 8],  // Fila 4
        [1, 2, 3, 4, 5, 6, 7, 8],  // Fila 5
        [pN, pN, pN, pN, pN, pN, pN, pN],  // Fila 6
        [tN, cN, aN, dN, rN, aN, cN, tN]   // Fila 7
    ]

    const EDGES = [
        ["A", "B", "C", "D", "E", "F", "G", "H"],
        [1, 2, 3, 4, 5, 6, 7, 8]
    ]

    const renderBox = (key, color, content, pieza) => {
        if (typeof (content) === "number" || typeof (content) === "string") {
            return (
                <>
                    <Box key={key} color={color} content={content.toString()} pieza={pieza} />
                </>
            )
        } else {
            return (
                <>
                    <Box key={key} color={color} pieza={pieza} />
                </>
            )
        }

    }

    const renderBoard = () => {
        const rows = []
        for (let i = 0; i < BOARD.length; i++) {
            const cell = []
            let color = ""
            if (i % 2 === 0) {
                color = "white"
            } else {
                color = "grey"
            }
            for (let j = 0; j < BOARD.length; j++) {
                if (i < 2 || i > 5) {
                    cell.push(renderBox(`${i}-${j}`, color, null, BOARD[i][j]))
                } else {
                    cell.push(renderBox(`${i}-${j}`, color, null, null))
                }
                if (color === "white") {
                    color = "grey"
                } else {
                    color = "white"
                }
            }
            rows.push(cell)
        }
        return rows
    }

    const renderEdgesLetters = () => {
        const column = [];

        const cell = [];
        for (let j = 0; j < BOARD.length; j++) {
            cell.push(renderBox(`0-${j}`, "transparent", EDGES[0][j], null));
        }
        column.push(cell);
        return column;

    }
    const renderEdgesNumbers = () => {
        const column = [];
        const numbers = [...EDGES[1]];
        numbers.reverse();
        const cell = numbers.map((number, index) => (
            renderBox(`0-${index}`, "transparent", number, null)
        ));
        column.push(cell);
        return column;
    };
    return (
        <>
            <div className="container_board">
                <div className="lateral_left">
                    {renderEdgesNumbers()}
                </div>
                <div className="lateral_right">
                    {renderEdgesNumbers()}
                </div>
                <div className="top">
                    {renderEdgesLetters()}
                </div>
                <div className="board">
                    {renderBoard()}
                </div>
                <div className="bottom">
                    {renderEdgesLetters()}
                </div>
            </div>
        </>
    );
};

export default Board;
