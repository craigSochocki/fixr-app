function appendMessage(sender, message) {
  const conversation = document.getElementById("conversation");
  const messageElem = document.createElement("div");
  messageElem.innerHTML = message;

  if (sender === "user") {
    messageElem.classList.add("user-response");
  } else if (sender === "fixr") {
    messageElem.classList.add("fixr-response");
  }

  conversation.appendChild(messageElem);
}

const form = document.getElementById("chat-form");
const input = document.getElementById("chat-input");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const message = input.value;
  input.value = "";

  appendMessage("user", message);

  setTimeout(() => {
    appendMessage("fixr", "I see.  Tell me more.");
  }, 1000);
});
