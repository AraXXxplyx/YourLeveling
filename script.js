function startGame() {
    let openingScreen = document.getElementById("opening-screen");
    let dashboard = document.getElementById("dashboard");
    let helpScreen = document.getElementById("help-screen");

    // Hide the help screen to prevent flashing
    helpScreen.style.display = "none";

    // Fade out the opening screen
    openingScreen.classList.add("fade-out");

    setTimeout(() => {
        openingScreen.style.display = "none"; // Hide it completely
        dashboard.style.display = "block"; // Show dashboard
        dashboard.classList.add("fade-in"); // Smoothly appear
    }, 1000);
}

function showHelp() {
    let helpScreen = document.getElementById("help-screen");
    let openingScreen = document.getElementById("opening-screen");

    // Hide opening screen first
    openingScreen.classList.add("fade-out");

    setTimeout(() => {
        openingScreen.style.display = "none";
        helpScreen.style.display = "block";
        helpScreen.classList.add("fade-in");
    }, 1000);
}

function goBack() {
    let helpScreen = document.getElementById("help-screen");
    let openingScreen = document.getElementById("opening-screen");

    // Hide help screen first
    helpScreen.classList.add("fade-out");

    setTimeout(() => {
        helpScreen.style.display = "none";
        openingScreen.style.display = "block";
        openingScreen.classList.add("fade-in");
    }, 1000);
}
