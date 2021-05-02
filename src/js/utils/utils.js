const createElement = (target, htmlStr) => {
  const parents = document.querySelector(target);
  if (htmlStr) {
    parents.innerHTML = htmlStr.trim();
  }

  return parents;
};

export { createElement };
