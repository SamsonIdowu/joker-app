const jokeBtn = document.getElementById('joke-btn');
const jokeText = document.getElementById('joke');

const messageBtn = document.getElementById('message-btn');
const messageText = document.getElementById('message');

async function getJoke() {
    const res = await fetch('http://jokes-service:8080/jokes');
    const data = await res.json();
    jokeText.innerHTML = data.joke;
}

async function getMessage() {
    const res = await fetch('http://messages-service:8081/messages');
    const data = await res.json();
    messageText.innerHTML = data.message;
}

jokeBtn.addEventListener('click', getJoke);
messageBtn.addEventListener('click', getMessage);
