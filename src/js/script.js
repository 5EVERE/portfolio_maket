const openModal = document.querySelector(".hamburger");
const closeModal = document.querySelector(".menu__close");
const menuModal = document.querySelector(".menu");
openModal.addEventListener("click", () => {
  menuModal.classList.add("active");
});
closeModal.addEventListener("click", () => {
  menuModal.classList.remove("active");
});

const languageNumber = document.querySelectorAll(".language__wrapper_number");
const languageFill = document.querySelectorAll(
  ".language__wrapper_line-procent"
);

// languageNumber.forEach((procent) => {
//   document.querySelector(`.number-${procent.dataset.tab}`).style.width =
//     procent.textContent;
// });

languageNumber.forEach((procent, index) => {
  languageFill[index].style.width = procent.innerHTML;
});
