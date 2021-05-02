const createElement = (target, htmlStr) => {
  const parents = document.querySelector(target);
  if (htmlStr) {
    parents.innerHTML = htmlStr.trim();
  }

  return parents;
};

const setVisible = (target, pivot) => {
  pivot ? target.classList.remove("hidden") : target.classList.add("hidden");
};

export { createElement, setVisible };
