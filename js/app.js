// Components
import { RenderBoard } from "./board/board.js";
import { RenderClues } from "./clues/clues.js";

// Services
import { getData } from "./services/services.js";

async function Init() {
    const data = await getData();

    RenderBoard(
        data.data.board,
        RenderClues(data.data.clues).openClueByCell
    );
}

Init();