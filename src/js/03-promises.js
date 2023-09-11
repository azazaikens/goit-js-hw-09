const formPromis = document.querySelector('.form');
const startBth = formPromis.lastElementChild;

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay });
      }
    }, delay)
  })

  return promise;
}

formPromis.addEventListener('submit', ev => {
  ev.preventDefault();

  let delay = Number(ev.target.elements.delay.value);
  const step = Number(ev.target.elements.step.value);
  const amount = Number(ev.target.elements.amount.value);

  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay).then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    
    delay += step;
  }

})
