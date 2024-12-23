import { HfInference } from "@huggingface/inference";

const SYSTEM_PROMPT = `
You are an assistant suggesting recipes based on a list of ingredients. 
Use ingredients from the list or add a few common extras. 
but try not to include too many extra ingredients. 
Format your response in markdown to make it easier to render to a web page
`;

// for HF_ACCESS_TOKEN
const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN_2);
async function withRetry(fun, retries = 3, delay = 1000) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fun();
    } catch (error) {
      if (attempt < retries && error.response?.status === 429) {
        console.log(`Retrying. . . Attempt ${attempt}`);
        await new Promise((res) =>
          setTimeout(res, delay * Math.pow(2, attempt))
        );
      } else {
        throw error;
      }
    }
  }
}
export async function getRecipeFromMistral(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");

  const apiCall = async () => {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
        },
      ],
      max_tokens: 512,
    });
    return response.choices[0].message.content;
  };

  try {
    return await withRetry(apiCall, 3, 1000);
  } catch (err) {
    console.error(`Failed after Retries: ${err.message}`);
    return "I'm sorry, I couldn't generate a recipe at this time. Please try again later.";
  }
}
