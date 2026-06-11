// Utils And Hooks
import {
    closeAll,
    findClueByCell,
    openClueElement,
    renderList
} from "../utils/index.js";

export function RenderClues(clues) {
    const cluesElement = document.getElementById("clues");

    let currentType = "across";

    // ـــــــــــ Change Active Buttons _____
    function setActiveButton(type) {
        if (type === "across") {
            document.getElementById("acrossBtn").classList.add("active");
            document.getElementById("downBtn").classList.remove("active");
        } else {
            document.getElementById("downBtn").classList.add("active");
            document.getElementById("acrossBtn").classList.remove("active");
        }
    }

    // ــــــــــ Get Clues List By Type ـــــ 
    function getList(type) {
        return type === "across" ? clues.across : clues.down;
    }

    // __________ Close All Dropdowns And Open Clicked One _____
    function onHeaderClick(content) {
        closeAll();
        content.style.display = "block";
    }

    // __________ Render Clues List By Type _____
    function render(type) {
        currentType = type;

        renderList(cluesElement, getList(type), onHeaderClick);

        setActiveButton(type);
    }

    // __________ Open Clue Dropdown By Cell _____
    function openClueByCell(index) {
        const clue = findClueByCell(getList(currentType), index);

        if (!clue) return;
        closeAll();
        openClueElement(clue.number);
    }

    render("across");

    document.getElementById("acrossBtn").onclick = () => render("across");

    document.getElementById("downBtn").onclick = () => render("down");

    return { openClueByCell };
}