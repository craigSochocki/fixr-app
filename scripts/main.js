let fixrMessages = [
  "I'm sorry, I don't understand the question. Can you please rephrase it?",
  "Based on the data available, it seems likely that...",
  "I can't make decisions, but I can provide you with information that may help you make a decision.",
  "Here are some resources that might be helpful to you: [list of resources]",
  "I'm not sure. Would you like me to look it up for you?",
  "That's a great question! Let me see if I can find an answer for you.",
  "I think the best course of action would be...",
  "According to my analysis, the most likely outcome is...",
  "I'm sorry, I'm having trouble processing your request. Please try again later.",
  "I'm always learning, so please let me know if there's anything I can improve on.",
];

let counter = 0;

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

    //generate random number for fixr response
    randomNum = Math.floor(Math.random() * fixrMessages.length - 1);
    console.log(randomNum);

    // users message = input.value
    const message = input.value;

    // set the input field back to empty
    input.value = "";

    // call above function with "user as the"
    appendMessage("user", message);

    setTimeout(() => {
      appendMessage("fixr", fixrMessages[randomNum]);
    }, 1000);
    counter++;
    if (counter > fixrMessages.length - 1) {
      counter = 0;
    }
  }
});
