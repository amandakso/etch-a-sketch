const container=document.querySelector(".container");

let numberOfSquares= 0;
function generateSquares() {
    for (numberOfSquares=0; numberOfSquares <(16 * 16); numberOfSquares++){
        square=document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }
};
generateSquares();