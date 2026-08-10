document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".product__image-slider").forEach((slider) => {
    const scrollContainer = slider.querySelector(".field__items");
    const prevButton = slider.querySelector(".product__slider-button--prev");
    const nextButton = slider.querySelector(".product__slider-button--next");

    if (!scrollContainer || !prevButton || !nextButton) {
      return;
    }

    const images = scrollContainer.querySelectorAll(":scope > .field__item");

    if (images.length <= 1) {
      slider.classList.add("no-slider");
      return;
    }

    slider.classList.remove("no-slider");

    const getScrollAmount = () => {
      const image = scrollContainer.querySelector(":scope > .field__item");

      return image ? image.offsetWidth + 12 : scrollContainer.offsetWidth;
    };

    const goNext = () => {
      scrollContainer.scrollBy({
        left: getScrollAmount(),
        behavior: "smooth",
      });
    };

    const goPrevious = () => {
      scrollContainer.scrollBy({
        left: -getScrollAmount(),
        behavior: "smooth",
      });
    };

    prevButton.addEventListener("click", goPrevious);
    nextButton.addEventListener("click", goNext);

    slider.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrevious();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }
    });
  });
});
