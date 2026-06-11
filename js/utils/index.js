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

export {
    setupBoard,
    createCell,
    closeAll,
    findClueByCell,
    openClueElement
}