import Box from "./Box";

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

    const EDGES = [
        ["A", "B", "C", "D", "E", "F", "G", "H"],
        [1, 2, 3, 4, 5, 6, 7, 8]
    ]

    const renderBox = (key, color, content) => {
        if (typeof (content) === "number") {
            return (
                <>
                    <Box key={key} color={color} content={content.toString()} />
                </>

            )
        }
        return (
            <div>
                <Box color={color} content={content} />
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
            for (let j = 0; j < BOARD.length; j++) {
                cell.push(renderBox(`${i}-${j}`, color))
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

    const renderEdgesLetters = () => {
        const column = [];

        const cell = [];
        for (let j = 0; j < BOARD.length; j++) {
            cell.push(renderBox(`0-${j}`, "transparent", EDGES[0][j]));
        }
        column.push(cell);
        return column;

    }
    const renderEdgesNumbers = () => {
        const column = [];
        const numbers = [...EDGES[1]];
        numbers.reverse();
        const cell = numbers.map((number, index) => (
            renderBox(`0-${index}`, "transparent", number)
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
