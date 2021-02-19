import M from "@/../public/js/materialize.js";

export function initMaterialbox(ele) {
  const elems = document.querySelectorAll(ele);
  const instance = M.Modal.init(elems);
  return instance;
}
