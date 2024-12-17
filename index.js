import { Telegraf } from 'telegraf';
import { MongoClient } from 'mongodb';
import OpenAIApi from 'openai';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

// ENVIRONMENT VARIABLES
const botToken = process.env.BOT_TOKEN;
const openaiApiKey = process.env.OPENAI_API_KEY;
const mongoUri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;
const collectionName = process.env.COLLECTION_NAME;

// BOT SETUP
const bot = new Telegraf(botToken);
const openai = new OpenAIApi({ apiKey: openaiApiKey });

let conversationDb;

// DATABASE CONNECTION
const connectDatabase = async () => {
    try {
        const mongoClient = new MongoClient(mongoUri);
        await mongoClient.connect();
        conversationDb = mongoClient.db(dbName).collection(collectionName);
        console.log("✅ database connected");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error.message);
    }
};

// ASK CHATGPT
const getChatGptResponse = async (message) => {
    try {
        const chat = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: message }],
        });
        console.log("✅ OpenAI Response:", JSON.stringify(chat, null, 2)); // Log full response

        if (chat && chat.choices && chat.choices.length > 0) {
            return chat.choices[0].message.content.trim();
        } else {
            throw new Error("Unexpected OpenAI API response format.");
        }
    } catch (error) {
        if (error.status === 429) {
            console.error("❌ OpenAI quota exceeded. Check your plan and billing details.");
        } else { 
            console.error("❌ Error communicating OpenAI API:", error.message);
        }
        return "Sorry, I'm having trouble responding right now. Please try again!";
    }
};

// SAVE MESSAGE
const saveConversation = async (userId, question, answer) => {
    try {
        const record = { userId, question, answer, timestamp: new Date() };
        await conversationDb.insertOne(record);
        console.log("💾 Conversation saved to MongoDB");
    } catch (error) {
        console.error("❌ Error saving conversation:", error.message);
    }
};

// HANDLE USER MESSAGE
const handleUserMessage = async (ctx) => {
  const userMessage = ctx.message.text;
  const userId = ctx.message.from.id;

  console.log(`📩 Message from ${userId}: ${userMessage}`);

  try {
    const chatGptResponse = await getChatGptResponse(userMessage);
    await ctx.reply(`${chatGptResponse}`);
    await saveConversation(userId, userMessage, chatGptResponse);
  } catch (error) {
    console.error("❌ Error handling message:", error.message);
    ctx.reply("Something went wrong. Please try again later!");
  }
};

// BOT COMMANDS
bot.start((ctx) => ctx.reply("👋 Hello! I'm a bot powered by ChatGPT. Ask me anything."));
bot.on('text', handleUserMessage);

// MAIN FUNCTION
const runBot = async () => {
  try {
    await connectDatabase();
    bot.launch();
    console.log("🚀 bot started");
  } catch (error) {
    console.error("❌ error:", error.message);
  }
};

// Handle graceful shutdown
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

runBot();
