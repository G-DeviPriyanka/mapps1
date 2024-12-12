const { Configuration, OpenAIApi } = require("openai");

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';  // Disable SSL certificate verification

const configuration = new Configuration({
  apiKey: "YOUR_API_KEY"
});

const openai = new OpenAIApi(configuration);

async function chatWithGPT(prompt) {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }]
    });
    console.log("Chatbot:", response.data.choices[0].message.content.trim());
  } catch (error) {
    console.error("Error:", error);
  }
}

chatWithGPT("Hello, how are you?");
