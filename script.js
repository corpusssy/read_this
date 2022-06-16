let message = [
    "At some point, everything's gonna go south on you and you're gonna say 'This is it. This is how I end.",
    "But remember that life's not supposed to be easy at all",
    "There's gonna be challenges",
    "You're gonna get beat down",
    "That's the way life is.",
    "Life is full of pain",
    "It's everywhere",
    "The pain of defeat",
    "The pain of being disappointed",
    "The pain of losing",
    "The pain of being criticized",
    "The pain of being not enough",
    "The pain, the pain, the pain, that's called life",
    "But guess what",
    "There's no gain without pain.",
    "Some of you are in the darkest of darkest valleys",
    "I don't know what you're going through but remember",
    "It's okay to be scared",
    "It's okay to cry",
    "But giving up is not.",
    "When you feel like giving up, don't.",
    "When you're thinking about giving up, don't.",
    "Just remember, that life will be full of setbacks and hardships",
    "And that it's okay to feel down",
    "But whatever you do, don't let that keep holding you down and stop you from growing and moving forward.",
    "You are not alone.",
    "You are not alone.",
    "You are not alone.",
    "You are not alone.",
    "Read this"
];

let index = 0;

function messages() {

    if (index <= (message.length - 1)) {
        document.getElementById("messages").innerText = message[index];
        index++;
    } else {
        index = 0;
    }
}
