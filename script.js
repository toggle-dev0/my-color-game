const score = document.getElementById("score-id");
score.innerText = 0;
const restart = document.getElementById("restart");
const target = document.querySelector(".target-box");
const result = document.getElementById("result");
const newGameHandler = () => {
  score.textContent = 0;
  gameStart();
};
restart.onclick = () => newGameHandler();

let getRandomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

const gameStart = () => {
  const optionContainer = document.querySelector(".option-container");
  optionContainer.innerText = "";
  result.style.visibility = "hidden";
  // result.innerText = "";
  const correctColor = getRandomColor();
  target.style.backgroundColor = correctColor;
  const fakeColor1 = getRandomColor();
  const fakeColor2 = getRandomColor();
  const fakeColor3 = getRandomColor();
  const fakeColor4 = getRandomColor();
  const fakeColor5 = getRandomColor();
  const options = [
    correctColor,
    fakeColor1,
    fakeColor2,
    fakeColor3,
    fakeColor4,
    fakeColor5,
  ].sort(() => Math.random() - 0.5);
  options.forEach((option) => {
    const button = document.createElement("button");
    button.style.backgroundColor = option;
    button.className = "option";
    button.setAttribute("data-testid", "colorOption");
    button.onclick = () => checkColor(option, correctColor);
    optionContainer.appendChild(button);
  });
};

const checkColor = (guess, actual) => {
  if (guess === actual) {
    score.innerText++;
    result.style.visibility = "visible";
    result.innerText = "Correct!";
    setTimeout(gameStart, 1000);
  } else {
    result.innerText = "Try again!";
    result.style.visibility = "visible";
  }
};

gameStart();
