const helloButton = document.querySelector("#hello-button");
const greeting = document.querySelector("#greeting");
const greetings = [
    "Nice to meet you!",
    "Great to see you here!",
    "Welcome to my homepage!",
    "How are u doing?"
];
const slangButton = document.querySelector("#slang-button");
const slang = document.querySelector("#slang");
let greetingCount = 0;

function showGreeting() {
    greeting.textContent = greetings[greetingCount];
    greetingCount = greetingCount + 1;

    if (greetingCount === greetings.length) {
        greetingCount = 0;
    }
}

helloButton.addEventListener("click", showGreeting);
slangButton.addEventListener("click", function () {
    slang.textContent = "What's up!";
});