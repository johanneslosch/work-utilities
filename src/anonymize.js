function getDataFromInput(action) {
  let result = "";
  switch (action) {
    case "anonymize":
      result = replaceUUIDs(document.getElementById("anonymizeInput").value);
      copyToClipboard(result);
      document.getElementById("anonymizedOutput").textContent = result;
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

function replaceUUIDs(input) {
  const uuidRegex =
    /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi;
  try {
    const obj = JSON.parse(input);
    const uuidMap = new Map();

    function traverse(node) {
      if (typeof node === "string") {
        return node.replace(uuidRegex, (match) => {
          if (!uuidMap.has(match)) {
            uuidMap.set(match, `UUID_${uuidMap.size + 1}`);
          }
          return uuidMap.get(match);
        });
      } else if (Array.isArray(node)) {
        return node.map(traverse);
      } else if (node && typeof node === "object") {
        const result = {};
        for (const key in node) {
          if (Object.prototype.hasOwnProperty.call(node, key)) {
            result[key] = traverse(node[key]);
          }
        }
        return result;
      }
      return node;
    }
    return JSON.stringify(traverse(obj), null, 2);
  } catch (e) {
    // Fallback: if input is not valid JSON, simply replace UUID strings
    return input.replace(uuidRegex, "ANONYMIZED_UUID");
  }
}
