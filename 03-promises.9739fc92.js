!function(){var e=document.querySelector(".form");e.lastElementChild;function t(e,t){return new Promise((function(n,o){setTimeout((function(){Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}e.addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(e.target.elements.delay.value),o=Number(e.target.elements.step.value),a=Number(e.target.elements.amount.value),i=1;i<=a;i++)t(i,n).then((function(e){var t=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))})),n+=o}))}();
//# sourceMappingURL=03-promises.9739fc92.js.map
