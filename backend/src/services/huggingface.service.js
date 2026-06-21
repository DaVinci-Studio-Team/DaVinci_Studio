const { InferenceClient } = require("@huggingface/inference");

const client = new InferenceClient(process.env.HUGGINGFACE_API_KEY);

const generateImageFromPromptByHuggingFace = async (prompt, numImages = 4) => {
  try {
    // const tasks = Array.from({ length: numImages }).map(() =>
    //   client.textToImage({
    //   provider: "hf-inference",
    //   model: "stabilityai/stable-diffusion-3-medium-diffusers",
    //   inputs: String(prompt),
    //   parameters: {
    //     num_inference_steps: 25,
    //     guidance_scale: 7.5,
    //     width: 1024,
    //     height: 1024,
    //     },
    //   })
    // );

    // const imageBlobs = await Promise.all(tasks);

    // const base64Images = await Promise.all(
    //   imageBlobs.map(async (blob) => {
    //     const buffer = await blob.arrayBuffer();
    //     return `data:image/png;base64,${Buffer.from(buffer).toString("base64")}`;
    //   })
    // );
    
    // return base64Images;

    return ['https://images.stockcake.com/public/2/3/7/23754627-0a14-4855-971d-49de7b8aecfc_medium/intense-anime-portrait-stockcake.jpg',
      'https://m.media-amazon.com/images/I/711QKwip-kL._AC_UF894,1000_QL80_.jpg',
      'https://m.media-amazon.com/images/I/6154Bwvu4vL._AC_UF894,1000_QL80_.jpg',
      'https://play-lh.googleusercontent.com/UV4ptzFCTi4sprj3kA1FXpQuGMjl7oFhWHUOqPH5cNgwcmiatn3KNfZ7DTInLZbPzvdR6AElXJj2Encuwmga'
    ]


  } catch (error) {
    console.log("HF SDK Error:", error.message);
    throw error;
  }
};


module.exports = {
  generateImageFromPromptByHuggingFace,
};
