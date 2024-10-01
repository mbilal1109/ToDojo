import "./styles.css";

let addButton = document.querySelector("#add-btn");
let dialog = document.querySelector("#dialog");

addButton.addEventListener("click", () => {
  dialog.showModal();
});
