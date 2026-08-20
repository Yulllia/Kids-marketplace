document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".card-slider, .product__image-slider").forEach((slider) => {

    const scrollContainer =
      slider.querySelector(".card-slider__scroll") ||
      slider.querySelector(".field__items");

    const prevButton = slider.querySelector(
      ".card-slider__button--prev, .product__slider-button--prev"
    );

    const nextButton = slider.querySelector(
      ".card-slider__button--next, .product__slider-button--next"
    );

    if (!scrollContainer || !prevButton || !nextButton) {
      return;
    }

    const items = scrollContainer.children;
    const visibleItems = Number(slider.dataset.sliderItems) || 1;

    if (items.length <= visibleItems) {
      slider.classList.add("no-slider");
      return;
    }

    const getScrollAmount = () => {
      const item = items[0];

      return item
        ? item.offsetWidth + 24
        : scrollContainer.offsetWidth;
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

    
    console.log("slider:", slider);
console.log("scroll:", scrollContainer);
console.log("items:", items.length);
console.log("prev:", prevButton);
console.log("next:", nextButton);

    prevButton.addEventListener("click", goPrevious);
    nextButton.addEventListener("click", goNext);
  });
});