const testimonials = document.getElementsByClassName("testimonial-card");
const close_client_info_buttons = document.getElementsByClassName(
  "testimonial-card__close-info"
);

for (let i = 0; i < testimonials.length; i++) {
  testimonials[i].addEventListener("click", () => {
    testimonials[i].lastElementChild.style.transform = "translateY(0)";
  });
  close_client_info_buttons[i].addEventListener("click", (e) => {
    e.stopPropagation();
    testimonials[i].lastElementChild.style.transform = "translateY(100%)";
  });
}
