import { createElement } from "../utils/utils.js";
import $store from "../store/index.js";

const template = `
<div class="d-flex">
  <label class="purchase-result-text flex-auto my-0"
    >총 0개를 구매하였습니다.</label
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
`;

export default function PurchaseResult(target) {
  const dom = createElement(target, template);
  const resultText = dom.querySelector(".purchase-result-text");
  const lottoImgBox = dom.querySelector(".lotto-img-box");

  const init = () => {
    $store.subscribe("money", render);
  };

  const render = () => {
    const lottoCnt = $store.getLottoCnt();

    resultText.innerText = `총 ${lottoCnt}개를 구매하였습니다.`;
    lottoImgBox.innerHTML = "";
    for (let i = 0; i < lottoCnt; i++) {
      lottoImgBox.insertAdjacentHTML(
        "beforeend",
        `<span class="lotto-img mx-1 text-4xl">🎟️ </span>`
      );
    }
  };

  init();

  return dom;
}
