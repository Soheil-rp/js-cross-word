// Utils And Hooks
import {
    closeAll,
    findClueByCell,
    openClueElement
} from "../utils/index.js";

// ــــــــــ Creat Drop Down Items _____
function createItem(item) {

    // _____Wrapper____
    const wrapper = document.createElement("div");

    wrapper.classList.add("dropdown");

    wrapper.dataset.id = item.number;

    //_____Dropdown___
    const header = document.createElement("div");

    header.classList.add("dropdown-header");

    header.textContent = `${item.number}. ${item.clue}`;

    //_____Dropdown Content___ 
    const content = document.createElement("div");

    content.classList.add("dropdown-content");

    content.textContent = item.answer;

    content.style.display = "none";

    header.addEventListener("click", () => {
        closeAll();
        content.style.display = "block";
    });

    wrapper.append(header, content);

    return wrapper;
}

export function renderClues(clues) {
    const cluesElement = document.getElementById("clues");

    let currentType = "across";

    // ــــــــــ Open clues Item When Click On Cell _____
    function openClueByCell(index) {
        const list = currentType === "across" ?
            clues.across :
            clues.down;

        const clue = findClueByCell(list, index);

        if (!clue) return;
        closeAll();
        openClueElement(clue.number);
    }

    function render(type) {
        currentType = type;

        cluesElement.innerHTML = "";

        const list = type === "across" ? clues.across : clues.down;

        list.forEach(item => cluesElement.appendChild(createItem(item)));
    }

    render("across");

    document.getElementById("acrossBtn").onclick = () => render("across");

    document.getElementById("downBtn").onclick = () => render("down");

    return { openClueByCell };
}