document.getElementById("heartButton").addEventListener("click", function() {
    const container = document.getElementById("heartsContainer");
    container.innerHTML = ''; // Clear previous hearts
    container.style.display = 'block';
  
    for (let i = 0; i < 100; i++) {
      const heart = document.createElement("div");
      heart.innerText = "❤️";
      heart.classList.add("heart");
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.top = Math.random() * 100 + "vh"; // Random vertical position
      heart.style.animationDuration = Math.random() * 3 + 3 + "s"; // Random duration between 3 and 6 seconds
      container.appendChild(heart);
    }
  
    setTimeout(() => {
      container.style.display = 'none';
    }, 6000); // Hide container after 6 seconds
});
  
const noButton = document.getElementById("noButton");
let noButtonClicked = false;

noButton.addEventListener("mouseover", function() {
  if (!noButtonClicked) {
    // Move the button to a random position
    const newX = Math.random() * (window.innerWidth - this.clientWidth);

    // Restrict the Y position to the bottom 30% of the screen
    const lowerBoundY = window.innerHeight * 2; // Starting point of the bottom 30%
    const newY = lowerBoundY + Math.random() * (window.innerHeight * 0.4 - this.clientHeight);

    this.style.position = 'absolute';
    this.style.left = newX + 'px';
    this.style.top = newY + 'px';
  }
});

document.getElementById("heartButton").addEventListener("click", function() {
  noButtonClicked = true;
  noButton.style.display = 'none'; // Hide the No button
  // Optionally, add any other actions you want to trigger when Yes is clicked
});