const gridContainer = document.getElementsByClassName("container")[0];
console.log(gridContainer);
createCanvas(16);

function createCanvas(size) {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  const squareSize = 400 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}`;

    square.style.opacity = "1";

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = getRandomColor();
    });
    container.appendChild(square);
  }
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
