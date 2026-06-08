const Replicate = require("replicate");

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_KEY,
});

const generateImageFromPromptByReplicate = async (prompt) => {
  const output = await replicate.run(
    "black-forest-labs/flux-schnell",
    {
      input: {
        prompt: prompt,
        go_fast: true,
        megapixels: "1",
        num_outputs: 1,
        aspect_ratio: "1:1",
        output_format: "webp",
        output_quality: 80,
      },
    }
  );

  return output;
};

module.exports = {
  generateImageFromPromptByReplicate,
};