function initSelect() {
  const selectMenu = document.querySelector(".select");
  const select = selectMenu.querySelector(".select__native");
  const selectBtn = selectMenu.querySelector(".select__btn");
  const options = selectMenu.querySelectorAll(".select__option");
  const btnText = selectMenu.querySelector(".select__btn-text");

  selectBtn.addEventListener("click", () => {
    selectMenu.classList.toggle("active");
  });

  options.forEach(option => {
    option.addEventListener("click", () => {
      const value = option.dataset.value;
      const text = option.querySelector(".select__option-text").textContent;

      select.value = value;
      btnText.textContent = text;

      selectMenu.classList.remove("active");
    });
  });
}

initSelect();