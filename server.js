const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await axios.post('http://127.0.0.1:11434/api/chat', {
      model: 'my-ai-bot',
      stream: false,
      messages: [{ role: 'user', content: userMessage }]
    });

    console.log('Ollama response:', response.data);

    // ✅ Correct way to extract response from Ollama
    const reply = response.data.message?.content;

    if (reply) {
      res.json({ reply });
    } else {
      res.status(500).json({ error: 'No response from Ollama' });
    }
  } catch (err) {
    console.error('Error from Ollama:', err.message);
    res.status(500).json({ error: 'Failed to get response from AI' });
  }
});

app.listen(3000, () => {
  console.log('Chatbot server running at http://localhost:3000');
});
