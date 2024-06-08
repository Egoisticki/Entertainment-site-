document.querySelector("body").addEventListener("click", function() {
    console.log("coordenate clicked:", event.clientX, event.clientY);
});
const homeAnchor = document.getElementById("home");
const moviesAnchor = document.getElementById("movies");
const seriesAnchor = document.getElementById("series");
const profileAnchor = document.getElementById("profile");
const profileClicked = document.getElementById("profile_clicked");
homeAnchor.addEventListener("click", function() {
    console.log("home clicked");
    homeAnchor.querySelector('svg').classList.add("selected");
    moviesAnchor.querySelector('svg').classList.remove("selected", "movies");
    seriesAnchor.querySelector('svg').classList.remove("selected", "series");
});

moviesAnchor.addEventListener("click", function() {
    console.log("movies clicked");
    moviesAnchor.querySelector('svg').classList.add("selected");
    homeAnchor.querySelector('svg').classList.remove("selected", "home");
    seriesAnchor.querySelector('svg').classList.remove("selected", "series");
});

seriesAnchor.addEventListener("click", function() {
    console.log("series clicked");
    seriesAnchor.querySelector('svg').classList.add("selected");
    homeAnchor.querySelector('svg').classList.remove("selected", "home");
    moviesAnchor.querySelector('svg').classList.remove("selected", "movies");
});
profileAnchor.addEventListener("click", function() {
    console.log("profile clicked");
    if (profileClicked.classList.contains("hidden")) {
        profileClicked.classList.remove("hidden");
        profileAnchor.style.border ="2px solid white";
    } else {
        profileClicked.classList.add("hidden");
        profileAnchor.style.border ="1px solid white";
    }
})