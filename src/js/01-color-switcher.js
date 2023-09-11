const bodyColor = document.querySelector('body')
const bthStart = document.querySelector('[data-start]')
const bthStop = document.querySelector('[data-stop]')

let timerId;

bthStart.addEventListener('click', () => {
    bthStart.disabled = true;
    timerId = setInterval(() => bodyColor.style.backgroundColor = getRandomHexColor(), 1000);
});

bthStop.addEventListener('click', () => {
    bthStart.disabled = false;
    clearInterval(timerId);
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}