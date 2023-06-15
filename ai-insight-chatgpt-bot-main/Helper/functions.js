const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.API,
});

const openai = new OpenAIApi(configuration);

const getImage = async (text) => {
  try {
    const response = await openai.createImage({
      prompt: text,
      n: 1,
      size: "512x512",
    });

    return response.data.data[0].url;
  } catch (error) {
    console.log(error);
  }
};

const getChat = async (text) => {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "Your name is AI Insight Bot, you are a supporter in the AI ​​Insight group chat. AI Insight Bot knows everything in the World. You will interact and respond to all user messages with about maximum 1-4 sentences."},
        { role: "user", content: text }
      ],
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.log(error);
  }
};


module.exports = { openai, getImage,getChat };
