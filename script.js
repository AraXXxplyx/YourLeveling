document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("opening-screen").style.display = "flex";
    document.getElementById("help-screen").classList.add("hidden");
    document.getElementById("dashboard").classList.add("hidden");
});

// Start Game
function startGame() {
    let openingScreen = document.getElementById("opening-screen");
    let dashboard = document.getElementById("dashboard");
    let loadingMessage = document.getElementById("loading-message");
    let statsContainer = document.getElementById("stats-container");
    let exerciseButtons = document.getElementById("exercise-buttons");

    openingScreen.style.display = "none";
    dashboard.style.display = "flex";

    setTimeout(() => {
        loadingMessage.style.display = "none";
        statsContainer.style.display = "block";
        exerciseButtons.style.display = "block";
    }, 2000);
}

// Show Help
function showHelp() {
    let helpScreen = document.getElementById("help-screen");
    helpScreen.style.opacity = "1";
    helpScreen.style.visibility = "visible";
}

// Close Help
function closeHelp() {
    let helpScreen = document.getElementById("help-screen");
    helpScreen.style.opacity = "0";
    helpScreen.style.visibility = "hidden";
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
