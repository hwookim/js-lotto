const $store = (() => {
  let money = 0;
  let lottoCnt = 0;

  const subscriber = {};

  const inputMoney = (value) => {
    money = value;
    lottoCnt = Math.floor(money / 1000);
    publish("money");
  };

  const getLottoCnt = () => {
    return lottoCnt;
  };

  const subscribe = (target, method) => {
    if (!subscriber[target]) {
      subscriber[target] = [];
    }
    subscriber[target].push(method);
  };

  const publish = (target) => {
    if (!subscriber[target]) {
      return;
    }

    subscriber[target].forEach((method) => method());
  };

  return {
    inputMoney,
    getLottoCnt,
    subscribe,
  };
})();

export default $store;
