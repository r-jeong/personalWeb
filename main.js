document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".car-item");
  const buttonsHtml = Array.from(items, () => {
    return `<span class = car-but></span>`;
  });
  carousel.insertAdjacentHTML(
    "beforeend",
    `<div class="car-nav"> 
    ${buttonsHtml.join("")}</div>`
  );
  const buttons = carousel.querySelectorAll(".car-but");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      items.forEach((item) => item.classList.remove("car-sel"));
      buttons.forEach((button) => button.classList.remove("but-sel"));

      items[i].classList.add("car-sel");
      button.classList.add("but-sel");
    });
  });


  const navLeft = document.querySelector(".nav-arrow-left");
  const navRight = document.querySelector(".nav-arrow-right");
  let slideTrack = 0;

  navLeft.addEventListener("click", () => {

    items[slideTrack].classList.remove("car-sel");
    buttons[slideTrack].classList.remove("but-sel");

      if(slideTrack == 0){
        slideTrack = 2;
      }
      else{
        slideTrack = slideTrack - 1;
      }

      items[slideTrack].classList.add("car-sel");
      buttons[slideTrack].classList.add("but-sel");
  }
  );

  navRight.addEventListener("click", () => {

    items[slideTrack].classList.remove("car-sel");
    buttons[slideTrack].classList.remove("but-sel");

      if(slideTrack == 2){
        slideTrack = 0;
      }
      else{
        slideTrack = slideTrack + 1;
      }

      items[slideTrack].classList.add("car-sel");
      buttons[slideTrack].classList.add("but-sel");
  }
  );

  items[0].classList.add("car-sel");
  buttons[0].classList.add("but-sel");


});