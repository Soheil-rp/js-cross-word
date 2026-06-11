// Components
import { renderBoard } from "./board/board.js";
import { renderClues } from "./clues/clues.js";

// Services
import { getData } from "./services/services.js";

async function init() {
    const data = await getData();

    renderBoard(
        data.data.board,
        renderClues(data.data.clues).openClueByCell
    );
}

init();