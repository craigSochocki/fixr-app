// store elements in variables
const conversation = document.getElementById("conversation");
const form = document.getElementById("chat-form");
const input = document.getElementById("chat-input");

// adds message to conversation box
function appendMessage(sender, message) {
  const messageElem = document.createElement("div");
  messageElem.innerHTML = message;

  if (sender === "user") {
    messageElem.classList.add("user-response");
  } else if (sender === "fixr") {
    messageElem.classList.add("fixr-response");
  }

  conversation.appendChild(messageElem);

  // scrollTop value is a measurment of the distance from top of element to top of visible element
  // set that equal to the scroll height so its always matched
  // scroll every time element is added
  setTimeout(() => {
    conversation.scrollTop = conversation.scrollHeight;
  }, 50);
}

// previous first argument was "submit", button is now removed
// on event = keypress & inside function if key = enter -> continue
form.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();

    // users message = input.value
    const message = input.value;

    // set the input field back to empty
    input.value = "";

    // call above function with "user as the"
    appendMessage("user", message);

    setTimeout(() => {
      appendMessage("fixr", "I see.  Tell me more.");
    }, 1000);
  }
});
