
function toggleChat() {
  let form = document.getElementById("customMyForm");
  let button = document.getElementById("custom-open-button");

  if (form.style.display === "block") {
    form.style.display = "none";
    button.textContent = "Start Chat"; // Change button text to 'Start Chat'
    setIframeSrc();
  } else {
    form.style.display = "block";
    button.textContent = "End Chat"; // Change button text to 'End Chat'
  }
}

async function setIframeSrc() {
  try {
    const response = await fetch('https://demo.redwater-75eedb1d.eastus.azurecontainerapps.io/get-chatbot-token', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    let iframe = document.getElementById("chatbot-iframe");
    if (iframe) {
      iframe.src = "https://webchat.botframework.com/embed/smileMartBot-bot?s=" + json.key;
    }
  } catch (e) {
    console.error("Failed to set iframe source:", e);
  }
}

// Call setIframeSrc once the DOM is fully loaded, if necessary
// Commented out because setIframeSrc will be called when the chat opens
document.addEventListener("DOMContentLoaded", setIframeSrc);
