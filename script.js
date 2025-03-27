document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("opening-screen").style.display = "flex";
    document.getElementById("help-screen").classList.add("hidden");
    document.getElementById("dashboard").classList.add("hidden");
});

// Start game & move to the dashboard
function startGame() {
    let openingScreen = document.getElementById("opening-screen");
    let dashboard = document.getElementById("dashboard");

    // Add fade-out effect
    openingScreen.classList.add("fade-out");

    setTimeout(() => {
        openingScreen.style.display = "none";
        dashboard.style.display = "flex";
        dashboard.classList.add("fade-in"); // Smooth fade-in for the dashboard
    }, 1000);
}

// Show Help Screen
function showHelp() {
    let helpScreen = document.getElementById("help-screen");

    // Make sure other screens are hidden before showing help
    document.getElementById("opening-screen").style.display = "none";
    document.getElementById("dashboard").classList.add("hidden");

    helpScreen.classList.remove("hidden");
    helpScreen.classList.add("fade-in");
}

// Close Help Screen
function closeHelp() {
    let helpScreen = document.getElementById("help-screen");
    helpScreen.classList.add("fade-out");

    setTimeout(() => {
        helpScreen.classList.add("hidden");
        helpScreen.classList.remove("fade-in", "fade-out");

        // Go back to the main menu
        document.getElementById("opening-screen").style.display = "flex";
    }, 500);
}

// XP & Level System
let xp = 0;
let level = 1;

function gainXP(amount) {
    xp += amount;
    document.getElementById("xp-text").innerText = "XP: " + xp;

    if (xp >= 100) {
        level++;
        xp = 0;
        document.getElementById("level-text").innerText = "Level: " + level;
        document.getElementById("xp-text").innerText = "XP: " + xp;

        // Add a glow effect when leveling up
        let levelText = document.getElementById("level-text");
        levelText.classList.add("level-up-glow");
        setTimeout(() => levelText.classList.remove("level-up-glow"), 1500);

        alert("🎉 You leveled up to Level " + level + "!");
    }
}
