function startGame() {
    // Fade out the opening screen
    document.getElementById("opening-screen").style.animation = "fadeOut 1s forwards";

    // Wait 1 sec, then show dashboard smoothly
    setTimeout(() => {
        document.getElementById("opening-screen").style.display = "none";
        let dashboard = document.getElementById("dashboard");
        dashboard.style.display = "block";
        dashboard.style.animation = "fadeIn 1.5s forwards";

        // Show "Synchronizing stats..." for 2 sec before revealing stats
        setTimeout(() => {
            document.getElementById("loading-message").style.display = "none";
            document.getElementById("stats-container").classList.remove("hidden");
            document.getElementById("exercise-buttons").classList.remove("hidden");
        }, 2000);
    }, 1000);
}
