import { createElement } from "./utils/utils.js";

const template = `
<div class="d-flex justify-center mt-5">
  <div class="w-100">
    <h1 class="text-center">🎱 행운의 로또</h1>
    <form class="mt-5">
      <label class="mb-2 d-inline-block"
        >구입할 금액을 입력해주세요.
      </label>
      <div class="d-flex">
        <input
          type="number"
          class="money-input w-100 mr-2 pl-2"
          placeholder="구입 금액"
        />
        <button type="button" class="money-submit btn btn-cyan">
          확인
        </button>
      </div>
    </form>
    <section class="mt-9">
      <div class="d-flex">
        <label class="purchase-result flex-auto my-0"
          >총 5개를 구매하였습니다.</label
        >
        <div class="flex-auto d-flex justify-end pr-1">
          <label class="switch">
            <input type="checkbox" class="lotto-numbers-toggle-button" />
            <span class="text-base font-normal">번호보기</span>
          </label>
        </div>
      </div>
      <div class="lotto-img-box d-flex flex-wrap">
      </div>
    </section>
    <form class="mt-9">
      <label class="flex-auto d-inline-block mb-3"
        >지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.</label
      >
      <div class="d-flex">
        <div>
          <h4 class="mt-0 mb-3 text-center">당첨 번호</h4>
          <div>
            <input
              type="number"
              class="winning-number mx-1 text-center"
            />
            <input
              type="number"
              class="winning-number mx-1 text-center"
            />
            <input
              type="number"
              class="winning-number mx-1 text-center"
            />
            <input
              type="number"
              class="winning-number mx-1 text-center"
            />
            <input
              type="number"
              class="winning-number mx-1 text-center"
            />
            <input
              type="number"
              class="winning-number mx-1 text-center"
            />
          </div>
        </div>
        <div class="bonus-number-container flex-grow">
          <h4 class="mt-0 mb-3 text-center">보너스 번호</h4>
          <div class="d-flex justify-center">
            <input type="number" class="bonus-number text-center" />
          </div>
        </div>
      </div>
      <button
        type="button"
        class="open-result-modal-button mt-5 btn btn-cyan w-100"
      >
        결과 확인하기
      </button>
    </form>
  </div>
</div>
`;

export default function App(target) {
  let money = 0;
  let lottoCnt = 0;

  const dom = createElement(target, template);

  const moneyInput = dom.querySelector(".money-input");
  const moneySubmit = dom.querySelector(".money-submit");
  const purchaseResult = dom.querySelector(".purchase-result");
  const lottoImgBox = dom.querySelector(".lotto-img-box");

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

  return dom;
}
