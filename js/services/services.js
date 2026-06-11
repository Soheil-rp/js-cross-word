export async function getData() {
    try {
        const response = await fetch("https://4ga.ir/crossword/?type=midi&date=2026-06-08");

        return response.json();

    } catch (error) {
        console.error(error)
    }
}

