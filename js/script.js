const urlAdviceData = "https://api.adviceslip.com/advice";

const adviceGenerateBtn = document.querySelector(".generate__btn");
const adviceId = document.querySelector(".advice__id");
const adviceText = document.querySelector(".advice");

async function addAdvice() {
  const responce = await fetch(urlAdviceData);
  const adviceData = await responce.json();

  await new Promise((resolve, reject) => {
    const { slip } = adviceData;
    adviceId.textContent = `Advice #${slip.id}`;
    adviceText.textContent = `“${slip.advice}”`;
    resolve();
  });
}
addAdvice();
adviceGenerateBtn.addEventListener("click", () => {
  addAdvice();
});
