let posters = document.querySelectorAll('.poster');
let currentIndex = 0;

function cyclePosters() {
    // Hide all posters
    posters.forEach(poster => poster.style.display = 'none');

    // Show the current poster
    posters[currentIndex].style.display = 'block';

    // Move to the next poster
    currentIndex++;
    if (currentIndex >= posters.length) {
        currentIndex = 0; // Reset to the first poster
    }
}

// Initially call the function
cyclePosters();

// Change poster every 3 seconds (3000 milliseconds)
setInterval(cyclePosters, 2000); // Updated to 3000 milliseconds for 3 seconds as mentioned
