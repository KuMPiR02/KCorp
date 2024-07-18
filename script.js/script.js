$(document).ready(function () {
  let tournamentsSection = $(".tournaments");
  let hiddenRow = $(".expandable");

  $(".expand-btn").click(function () {
    hiddenRow.toggleClass("hidden");
    tournamentsSection.toggleClass("expanded");

    if (hiddenRow.is(":visible")) {
      $(".expand-btn").html("Hide");
    } else {
      $(".expand-btn").html("More");
    }
  });
});

const carouselInner = document.querySelector(".carousel-inner");
const carouselItems = document.querySelectorAll(".carousel-item");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let counter = 0;

function updateCarousel() {
  const size = carouselItems[0].clientWidth;
  carouselInner.style.transform = "translateX(" + -size * counter + "px)";
}

nextBtn.addEventListener("click", () => {
  if (counter >= carouselItems.length - 1) {
    counter = -1;
  }
  counter++;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) {
    counter = carouselItems.length;
  }
  counter--;
  updateCarousel();
});

window.addEventListener("resize", updateCarousel);

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul a");
  const sections = document.querySelectorAll("section");

  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").slice(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        sections.forEach(function (section) {
          section.classList.remove("active");
        });

        targetSection.classList.add("active");

        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});

function openPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}
