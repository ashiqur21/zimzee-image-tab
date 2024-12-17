document.addEventListener("DOMContentLoaded", () => {
    const lightBtn = document.getElementById("light-btn");
    const darkBtn = document.getElementById("dark-btn");
    const imageBoxes = document.querySelectorAll(".image-box");
  
    lightBtn.addEventListener("click", () => {
      // Add active class to Light button and remove border from Dark button
      lightBtn.classList.add("active");
      darkBtn.classList.remove("active");
      darkBtn.style.border = "1px solid gray";
      lightBtn.style.border = "none";
  
      // Show the Light image
      imageBoxes[0].classList.add("active");
      imageBoxes[1].classList.remove("active");
    });
  
    darkBtn.addEventListener("click", () => {
      // Add active class to Dark button and remove border from Light button
      darkBtn.classList.add("active");
      lightBtn.classList.remove("active");
      lightBtn.style.border = "1px solid gray";
      darkBtn.style.border = "none";
  
      // Show the Dark image
      imageBoxes[0].classList.remove("active");
      imageBoxes[1].classList.add("active");
    });
  });
  