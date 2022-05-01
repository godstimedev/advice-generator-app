const advice = document.querySelector(".advice");
const button = document.querySelector(".dice");
const id = document.querySelector("#id");

const getAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      id.textContent = data.slip.id;
      advice.textContent = data.slip.advice;
    })
    .catch((err) => {
      id.textContent = "";
      advice.textContent = err.message;
    });
};
getAdvice();

button.addEventListener("click", getAdvice);
