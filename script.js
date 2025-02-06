function openRustdesk() {
  fetch("/open-rustdesk")
    .then((response) => response.text())
    .then((message) => console.log(message))
    .catch((error) => console.error("Error:", error));
}
