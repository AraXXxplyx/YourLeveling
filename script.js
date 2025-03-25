let xp = 0;
let level = 1;

function startGame() {
    document.getElementById("opening-screen").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
}

function showHelp() {
    document.getElementById("opening-screen").style.display = "none";
    document.getElementById("help-screen").style.display = "block";
}

function closeHelp() {
    document.getElementById("help-screen").style.display = "none";
    document.getElementById("opening-screen").style.display = "flex";
}

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
