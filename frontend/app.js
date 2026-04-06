async function sendData() {
  const input = document.getElementById("input").value;

  const res = await fetch("https://cf_ai_network_security_assistant.deviprasad.workers.dev", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: input })
  });

  const data = await res.json();
  document.getElementById("output").innerText = data.response;
}