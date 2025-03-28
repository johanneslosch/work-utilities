function stringifyJson(obj) {
  try {
    return JSON.stringify(obj, null, 2);
  } catch (error) {
    console.error("Error stringifying JSON object:", error);
    return null;
  }
}

function unStringifyJson(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Error parsing JSON string:", error);
    return null;
  }
}

function getDataFromInput(action) {
  let result = "";
  switch (action) {
    case "stringify":
      result = stringifyJson(document.getElementById("objectInput").value);
      copyToClipboard(result);
      document.getElementById("objectOutput").textContent = result;
      return;
    case "unstringify":
      const jsonString = document.getElementById("stringInput").value;
      result = unStringifyJson(jsonString);
      copyToClipboard(result);
      document.getElementById("parsedOutput").textContent = result;
      return;
  }
}

function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      const alertMessage = document.createElement("div");
      alertMessage.textContent = "Copied to clipboard";
      alertMessage.style.position = "fixed";
      alertMessage.style.bottom = "20px";
      alertMessage.style.right = "20px";
      alertMessage.style.backgroundColor = "#4caf50";
      alertMessage.style.color = "white";
      alertMessage.style.padding = "10px";
      alertMessage.style.borderRadius = "5px";
      document.body.appendChild(alertMessage);
      setTimeout(() => {
        alertMessage.remove();
      }, 5000);
    })
    .catch((err) => console.error("Error copying to clipboard:", err));
}

module.exports = getDataFromInput;
