// ================= COUNTER WITH "+" =================
const counters = document.querySelectorAll('.count');
const plusSigns = document.querySelectorAll('.plus');
const speed = 50; // Adjust speed of counting
let finishedCounters = 0;

function runCounter() {
  finishedCounters = 0;

  counters.forEach(counter => {
    counter.innerText = "0"; 
    counter.style.visibility = "visible";  
    counter.style.opacity = "1";

    const target = +counter.getAttribute('data-target');

    const updateCount = () => {
      const count = +counter.innerText;
      const increment = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target; 
        finishedCounters++;

        // ✅ When all counters finished, fade in "+" signs
        if (finishedCounters === counters.length) {
          plusSigns.forEach(sign => {
            sign.classList.add("show");
          });
        }
      }
    };

    updateCount();
  });
}

// Intersection Observer for counter container
const container = document.querySelector('.container');
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      runCounter();
    } else {
      // reset "+" for replay on scroll
      plusSigns.forEach(sign => sign.classList.remove("show"));
    }
  });
}, { threshold: 1.0 });
counterObserver.observe(container);

// ================= COLUMNS ANIMATION =================
document.addEventListener("DOMContentLoaded", () => {
  const columns = document.querySelectorAll('.third-div .column');
  const columnObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.1 }); // 10% visibility
  columns.forEach(col => columnObserver.observe(col));
});



document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true
    },
    spaceBetween: 60,
    loop: true,
  });
});


