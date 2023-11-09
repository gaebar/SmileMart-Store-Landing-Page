
function customOpenForm() {
  let form = document.getElementById("customMyForm");
  let openButton = document.getElementById("custom-open-button");
  if (form) {
    form.style.display = "block";
  }
  if (openButton) {
    openButton.style.display = "none";
  }
}

function customCloseForm() {
  let form = document.getElementById("customMyForm");
  if (form) {
    form.style.display = "none";
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


// Call setIframeSrc once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", setIframeSrc);
