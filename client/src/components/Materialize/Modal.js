import M from "@/../public/js/materialize.js";

export function initModal(ele) {
  document.addEventListener("DOMContentLoaded", function() {
    const elems = document.querySelectorAll(ele);
    M.Modal.init(elems);
  });
}

export function openModal(ele) {
  const elem = document.querySelector(ele);
  const instance = M.Modal.getInstance(elem);
  instance.open();
}

export function closeModal(ele) {
  const elem = document.querySelector(ele);
  const instance = M.Modal.getInstance(elem);
  instance.close();
}
