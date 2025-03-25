document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("opening-screen").style.display = "flex";
    document.getElementById("help-screen").classList.add("hidden");
    document.getElementById("dashboard").classList.add("hidden");
});

// Start game & move to the dashboard
function startGame() {
    let openingScreen = document.getElementById("opening-screen");
    let dashboard = document.getElementById("dashboard");
    let loadingMessage = document.getElementById("loading-message");

    openingScreen.classList.add("fade-out");

    setTimeout(() => {
        openingScreen.style.display = "none";
        dashboard.style.display = "flex";
    }, 1000);
}

// Show Help Screen
function showHelp() {
    let helpScreen = document.getElementById("help-screen");
    helpScreen.classList.add("show");
}

// Close Help Screen
function closeHelp() {
    let helpScreen = document.getElementById("help-screen");
    helpScreen.classList.remove("show");
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
