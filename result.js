function goBack() {
    window.location.href = "index.html";
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const attendance = localStorage.getItem("attendance");
    setTimeout(() => {
      document.getElementById("loading").style.display = "none";
      const resultElement = document.getElementById("result");
      resultElement.style.display = "block";
      resultElement.textContent = `${attendance}%`;
    }, 2000); // Simulate loading for 2 seconds
  });
  