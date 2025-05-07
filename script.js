async function sendMessage() {
    const input = document.getElementById('input');
    const message = input.value.trim();
    if (!message) return;
  
    const chatbox = document.getElementById('chatbox');
    chatbox.innerHTML += `<div class="message user">You: ${message}</div>`;
    input.value = '';
  
    const res = await fetch('/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });
  
    const data = await res.json();
if (data.reply) {
  chatbox.innerHTML += `<div class="message bot">Forever: ${data.reply}</div>`;
} else {
  chatbox.innerHTML += `<div class="message bot">Forever: (no reply or error)</div>`;
}

    chatbox.scrollTop = chatbox.scrollHeight;
  }
  