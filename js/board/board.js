// Utils And Hooks
import {
    setupBoard,
    createCell
} from "../utils/index.js";

export function renderBoard(board, openClueByCell) {
    const boardElement = setupBoard(board.width);

    board.cells.forEach((cell, index) => {
        boardElement.appendChild(
            createCell(cell, index, openClueByCell)
        );
    });
}