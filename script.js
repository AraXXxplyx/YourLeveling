document.addEventListener("DOMContentLoaded", function () {
    // Ensure only the opening screen is visible at first
    document.getElementById("opening-screen").style.display = "flex";
    document.getElementById("help-screen").style.display = "none";
    document.getElementById("dashboard").style.display = "none";
});

// Start game & move to the dashboard
function startGame() {
    let openingScreen = document.getElementById("opening-screen");
    let dashboard = document.getElementById("dashboard");
    let loadingMessage = document.getElementById("loading-message");
    let statsContainer = document.getElementById("stats-container");
    let exerciseButtons = document.getElementById("exercise-buttons");

    openingScreen.classList.add("fade-out");

    setTimeout(() => {
        openingScreen.style.display = "none";
        dashboard.style.display = "flex";
        dashboard.classList.add("fade-in");

        // Show "Synchronizing stats…" for 2 seconds, then reveal stats
        setTimeout(() => {
            loadingMessage.style.display = "none";
            statsContainer.style.display = "block";
            exerciseButtons.style.display = "block";
        }, 2000);
    }, 1000);
}

// Show help screen
function showHelp() {
    let openingScreen = document.getElementById("opening-screen");
    let helpScreen = document.getElementById("help-screen");

    openingScreen.style.display = "none";
    helpScreen.style.display = "flex";
    helpScreen.classList.add("fade-in");
}

// Close help & return to opening screen (Fixed Bug)
function closeHelp() {
    let helpScreen = document.getElementById("help-screen");
    let openingScreen = document.getElementById("opening-screen");

    helpScreen.classList.remove("fade-in"); // Remove fade-in effect before hiding
    setTimeout(() => {
        helpScreen.style.display = "none";
        openingScreen.style.display = "flex";
        openingScreen.classList.add("fade-in");
    }, 300);
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
        alert("🎉 You leveled up to Level " + level + "!");
    }
}
