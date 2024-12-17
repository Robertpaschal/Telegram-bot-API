# Telegram AI ChatBot 🤖

This is a **Telegram Bot** powered by the **OpenAI GPT-3.5-turbo** model. It allows users to interact with AI directly through Telegram, providing intelligent responses to user messages. MongoDB is used to store conversations for future reference.

---

## Features 🚀

- **AI Responses**: Uses OpenAI's GPT-3.5-turbo to respond to user messages.
- **Conversation Storage**: Saves all user interactions to MongoDB.
- **Rate Limiting**: Prevents over-usage of OpenAI's API to stay within free-tier limits.
- **Environment Configuration**: API keys and database credentials are loaded securely via environment variables.

---

## Technologies Used 🛠

- **Node.js**: JavaScript runtime environment.
- **Telegraf**: A modern library for building Telegram bots.
- **OpenAI API**: GPT-3.5-turbo for AI responses.
- **MongoDB**: Cloud-based database for storing conversations.
- **dotenv**: Manages environment variables.

---

## Prerequisites ✅

Make sure you have the following:

1. **Node.js** installed (v18+ recommended).
2. A **MongoDB** account with a database cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
3. **OpenAI API Key** (sign up at [OpenAI Platform](https://platform.openai.com/)).
4. A **Telegram Bot Token** (created using [BotFather](https://core.telegram.org/bots#botfather)).

---

## Installation 🛠️

1. **Clone the Repository**:
   ```bash
   git clone hhttps://github.com/Robertpaschal/Telegram-bot-API.git
   cd Telegram-bot-API
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:

   Create a `.env` file in the root directory and add the following:

   ```plaintext
   BOT_TOKEN=your_telegram_bot_token_here
   OPENAI_API_KEY=your_openai_api_key_here
   MONGO_URI=your_mongodb_connection_uri_here
   DB_NAME=your_database_name
   COLLECTION_NAME=your_collection_name
   ```

   - Replace `your_*` with your actual credentials.

---

## Running the Bot ▶️

Start the bot using the command:

```bash
node index.js
```

You should see:

```plaintext
✅ database connected
🚀 bot started
```

### Testing the Bot:

1. Open Telegram.
2. Search for your bot by its username.
3. Send a message like `Hello!` and the bot will reply.

---

## Deployment 🚀

To deploy the bot on a free hosting platform:

1. Use platforms like **Heroku**, **Render**, or **Railway** for deployment.
2. Use **MongoDB Atlas** for your database.
3. Set the required environment variables securely in your hosting settings.

Example for **Heroku**:

```bash
git add .
git commit -m "Deploy to Heroku"
heroku create
git push heroku main
```

---

## Environment Variables 🌍

| Variable          | Description                          | Example                          |
| ----------------- | ------------------------------------ | -------------------------------- |
| `BOT_TOKEN`       | Telegram Bot API Token               | `123456789:ABCDEF-your-bot-token` |
| `OPENAI_API_KEY`  | OpenAI API Key                       | `sk-abc1234567890abcdef`         |
| `MONGO_URI`       | MongoDB connection string            | `mongodb+srv://user:pass@cluster.mongodb.net` |
| `DB_NAME`         | Name of your MongoDB database        | `telegram_bot_db`                |
| `COLLECTION_NAME` | Name of the collection in MongoDB    | `conversations`                  |

---

## Usage 💡
- Start the Bot:

-- Open Telegram.
-- Search for your bot using its username.
-- Start the bot with /start.

- Chat with the Bot:

-- Send a message to the bot.
-- The bot will respond with AI-generated content.

- Rate Limiting:

- Users are rate-limited to ensure API quota is not exceeded.

- Start the bot by typing `/start` in Telegram.
- Ask questions or interact with the bot directly.
- Conversations will be saved to MongoDB.

Example:

**User**: `What is AI?`  
**Bot**: `AI stands for Artificial Intelligence...`

**User**: `Explain quantum physics in simple terms.`
**Bot:** `Quantum physics studies the behavior of matter and energy at very small scales...`

---

## Rate Limiting ⚠️

To prevent over-usage of OpenAI API and stay within the free quota, **rate limiting** is implemented in the bot. Users will be restricted to a certain number of requests per hour. This can be adjusted in the code.

---

## FAQ ❓

### Do users need to set up their own database?
No, if you have already created a MongoDB database (e.g., on MongoDB Atlas), users do not need to set up a new one. You simply need to share your **MongoDB connection string** (`MONGO_URI`) with them in the `.env` file.

---

## Contributing 🤝

Contributions are welcome! To contribute:

1. Fork the project.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## License 📄

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## Author 👨‍💻

Developed by **Odinaka Robert Nnamani**.

- GitHub: [Robertpaschal](https://github.com/Robertpaschal/)
- LinkedIn: [Odinaka Nnamani](https://www.linkedin.com/in/odinaka-nnamani-fullstack-developer/)
- Email: [nnamani.odinakarobert@gmail.com](mailto:nnamani.odinakarobert@gmail.com)

---

## Acknowledgments 🙌

- **OpenAI** for GPT-3.5-turbo.
- **Telegraf** for an excellent Telegram Bot library.
- **MongoDB** for database storage.

---

## Future Updates 🚧

- Add support for more models.
- Implement user-specific message limits.
- Deploy the bot to a free hosting server.

---

### Star this project ⭐ if you found it useful!

---
