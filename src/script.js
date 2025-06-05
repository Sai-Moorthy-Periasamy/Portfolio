document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbarNav");
  const toggler = document.querySelector(".navbar-toggler");

  // Optional: Close navbar when clicking outside
  document.addEventListener("click", function (event) {
    const isNavbarOpen = navbar.classList.contains("show");
    if (
      isNavbarOpen &&
      !navbar.contains(event.target) &&
      !toggler.contains(event.target)
    ) {
      let bsCollapse = new bootstrap.Collapse(navbar, { toggle: false });
      bsCollapse.hide();
    }
  });

  // Optional: Close navbar on window resize
  window.addEventListener("resize", function () {
    if (window.innerWidth > 991) {
      let bsCollapse = new bootstrap.Collapse(navbar, { toggle: false });
      bsCollapse.hide();
    }
  });

  // ✨ Animated Text 1
  const text1 = "Hi, I'm Sai Moorthy";
const container1 = document.getElementById("animatedText1");

if (container1) {
  container1.innerHTML = ""; // clear if needed

  const words = text1.split(" ");

  words.forEach((word, wordIndex) => {
    let wordSpan = document.createElement("span");
    wordSpan.classList.add("word");
    wordSpan.style.display = "inline-block"; // keep word together

    // Animate each letter inside the word
    word.split("").forEach((char, charIndex) => {
      let letterSpan = document.createElement("span");
      letterSpan.textContent = char;
      letterSpan.classList.add("letter", "animate__animated");
      letterSpan.style.animation = `fadeIn 0.2s ease-in-out ${(wordIndex * 0.6) + (charIndex * 0.2)}s forwards`;
      wordSpan.appendChild(letterSpan);
    });

    // Add a space after each word except last
    container1.appendChild(wordSpan);
    container1.appendChild(document.createTextNode(" "));
  });
}

  // ✨ Animated Text 2
  const text2 = "Full Stack Developer";
  const containers2 = document.getElementsByClassName("animatedText2");

  Array.from(containers2).forEach((container) => {
    container.innerHTML = "";
    text2.split("").forEach((char) => {
      let span = document.createElement("span");
      span.textContent = char;
      span.classList.add("letter1");
      container.appendChild(span);
    });

    let letters = container.querySelectorAll(".letter1");
    let index = 0;
    let expanding = true;

    function animateText() {
      letters.forEach((letter) => letter.classList.remove("active"));

      if (expanding) {
        for (let i = 0; i <= index; i++) {
          letters[i]?.classList.add("active");
        }
        index++;
        if (index >= letters.length) {
          expanding = false;
          setTimeout(animateText, 500);
          return;
        }
      } else {
        for (let i = 0; i < index; i++) {
          letters[i]?.classList.add("active");
        }
        index--;
        if (index < 0) {
          expanding = true;
          setTimeout(animateText, 500);
          return;
        }
      }

      setTimeout(animateText, 200);
    }

    animateText();
  });

  // ✨ Circle Progress
  document.querySelectorAll('.circle').forEach(circle => {
    let percent = circle.getAttribute('data-percent');
    let circumference = 314;
    let offset = circumference - (percent / 100) * circumference;
    circle.querySelector('.progress').style.strokeDashoffset = offset;
  });
});

  function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
      alert("Please fill out all fields.");
      return false;
    }

    // Optional: Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    return true; // allow form submission
  }
