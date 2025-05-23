# Forever_AI Bot 💬🤖

Forever_AI Bot is an intelligent and cute chatbot powered by Ollama's local AI models. Designed with a soft pink and olive green "cotton candy" aesthetic, this project integrates a friendly HTML/CSS/JavaScript frontend with an Express.js backend that communicates with Ollama’s local inference server.

---

## 🌟 Features

- 💡 Natural language interaction with the AI
- 🎀 Aesthetic UI with a pink-olive "cotton candy" theme
- ⚡ Smooth, fast local inference via [Ollama](https://ollama.com/)
- 🚀 Lightweight and easy to run locally
- 📦 Modular code structure

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript, Bootstrap 5
- **Backend:** Node.js, Express.js
- **AI Inference:** [Ollama](https://ollama.com/) (local LLMs)
- **Styling:** Custom CSS + Bootstrap (with cotton candy theme)

---

## 📁 Project Structure

```
express-backend-app/
│
├── backend/
│ └── server.js # Express backend to connect with Ollama
│
├── frontend/
│ ├── public/
│ │ └── index.html # Main UI
│ ├── src/
│ │ ├── style.css # Custom Bootstrap-based theme
│ │ └── script.js # Logic for sending and displaying messages
│
├── Modelfile # Ollama model file (optional)
└── README.md
```


---

## 🚀 How to Run

### 1. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) and [Ollama](https://ollama.com/) installed.

```bash
npm install express cors body-parser axios
```
npm install -g nodemon
ollama run my-ai-bot
ollama create my-ai-bot -f Modelfile
nodemon backend/server.js
### 3. Start Backend Server
```
nodemon backend/server.js
```

### 4. Launch the Chat UI
Just open frontend/public/index.html in your browser.

## 🧠 How it Works

- You type a message in the chat UI.
- The frontend sends the message to the Express backend (`/chat` endpoint).
- The backend sends this input to Ollama’s local LLM.
- The response is returned and displayed in a cute message bubble in the chat window.

---

## 🖌️ Theme and Styling

The theme is inspired by a soft blend of **pink and olive green**, making the bot feel friendly, comforting, and aesthetic. The UI features:

- 🎀 Rounded chat bubbles  
- 🤖 Cute bot avatar  
- 📱 Responsive layout  
- 🎨 Soft gradients & pastel palette

---

## 📸 Preview

*(Add your screenshot or UI preview here)*

---

## 📚 License

This project is open-source under the [MIT License](LICENSE).

---

## ✨ Credits

- 💻 Built by [Your Name]  
- 💡 Inspired by modern chatbot UX trends and pastel color schemes  
- 🤖 Powered by Ollama LLMs

