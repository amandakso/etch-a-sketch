const container=document.querySelector(".container");

let numberOfSquares= 0;
function generateSquares() {
    for (numberOfSquares=0 * 0; numberOfSquares <(16 * 16); numberOfSquares++){
        square=document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
        
    }
};
generateSquares();

const color=document.querySelectorAll("div.square");
color.forEach((square) => {
    square.addEventListener("mouseleave", () => {
        square.style.background=`rgb(${255},${204},${229})`;
    });
});