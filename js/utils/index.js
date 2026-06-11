function setupBoard(width) {
    const boardElement = document.getElementById("board");

    boardElement.innerHTML = "";

    boardElement.style.display = "grid";

    boardElement.style.gridTemplateColumns = `repeat(${width}, 50px)`;

    boardElement.style.gridTemplateRows = `repeat(${width}, 50px)`;

    return boardElement;
}

function createCell(cell, index, openClueByCell) {
    const div = document.createElement("div");

    div.classList.add("cell");

    if (cell === null) {
        div.classList.add("blocked");
        return div;
    }

    // ــــ Label __
    const label = document.createElement("span");

    label.classList.add("label");

    label.textContent = cell.label || "";

    // ____Answer___
    const answer = document.createElement("span");

    answer.classList.add("answer");

    answer.textContent = cell.answer;

    answer.style.display = "none";

    div.addEventListener("click", () => {
        answer.style.display = "block";
        openClueByCell(index);
    });

    div.appendChild(label);
    div.appendChild(answer);

    return div;
}

function closeAll() {
    document
        .querySelectorAll(".dropdown-content")
        .forEach(item => (item.style.display = "none"));
}

function findClueByCell(clues, index) {
    return clues.find(item => item.cells?.includes(String(index)));
}

function openClueElement(number) {
    const element = document.querySelector(`.dropdown[data-id="${number}"]`);

    if (element) element.querySelector(".dropdown-content").style.display = "block";
}

function createHeader(item) {
    const header = document.createElement("div");

    header.classList.add("dropdown-header");

    header.textContent = `${item.number}. ${item.clue}`;

    return header;
}

function createContent(item) {
    const content = document.createElement("div");

    content.classList.add("dropdown-content");

    content.textContent = item.answer;

    content.style.display = "none";

    return content;
}

function createItem(item, onHeaderClick) {
    const wrapper = document.createElement("div");

    wrapper.classList.add("dropdown");

    wrapper.dataset.id = item.number;

    const header = createHeader(item);

    const content = createContent(item);

    header.addEventListener("click", () => onHeaderClick(content));

    wrapper.append(header, content);

    return wrapper;
}

function renderList(cluesElement, list, onHeaderClick) {
    cluesElement.innerHTML = "";
    
    list.forEach(item => cluesElement.appendChild(createItem(item, onHeaderClick)));
}

export {
    setupBoard,
    createCell,
    closeAll,
    findClueByCell,
    openClueElement,
    createHeader,
    createContent,
    createItem,
    renderList
}