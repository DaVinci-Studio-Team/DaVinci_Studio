const { InferenceClient } = require("@huggingface/inference");

const client = new InferenceClient(process.env.HUGGINGFACE_API_KEY);

const generateImageFromPromptByHuggingFace = async (prompt, numImages = 4) => {
  try {
    const tasks = Array.from({ length: numImages }).map(() =>
      client.textToImage({
      provider: "hf-inference",
      model: "stabilityai/stable-diffusion-3-medium-diffusers",
      inputs: String(prompt),
      parameters: {
        num_inference_steps: 25,
        guidance_scale: 7.5,
        width: 1024,
        height: 1024,
        },
      })
    );

    const imageBlobs = await Promise.all(tasks);

    const base64Images = await Promise.all(
      imageBlobs.map(async (blob) => {
        const buffer = await blob.arrayBuffer();
        return `data:image/png;base64,${Buffer.from(buffer).toString("base64")}`;
      })
    );

    return base64Images; 
  } catch (error) {
    console.log("HF SDK Error:", error.message);
    throw error;
  }
};


module.exports = {
  generateImageFromPromptByHuggingFace,
};
