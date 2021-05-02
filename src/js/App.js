export default function App() {
  let money = 0;
  let lottoCnt = 0;

  const moneyInput = document.querySelector(".money-input");
  const moneySubmit = document.querySelector(".money-submit");
  const purchaseResult = document.querySelector(".purchase-result");
  const lottoImgBox = document.querySelector(".lotto-img-box");

  const initEventListeners = () => {
    moneyInput.addEventListener("keypress", onKeypressMoneyInput);
    moneySubmit.addEventListener("click", submitMoney);
  };

  const onKeypressMoneyInput = (event) => {
    if (event.key !== "Enter") {
      return;
    }
    event.preventDefault();
    submitMoney();
  };

  const submitMoney = () => {
    money = moneyInput.value.trim();
    lottoCnt = Math.floor(money / 1000);

    purchaseResult.innerText = `총 ${lottoCnt}개를 구매하였습니다.`;
    lottoImgBox.innerHTML = "";
    for (let i = 0; i < lottoCnt; i++) {
      lottoImgBox.insertAdjacentHTML(
        "beforeend",
        `<span class="lotto-img mx-1 text-4xl">🎟️ </span>`
      );
    }
  };

  initEventListeners();
}
