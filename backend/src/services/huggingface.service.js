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

    return ['https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
      'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-nature-scenery-free-image.jpeg?w=600&quality=80',
      'https://img.magnific.com/premium-photo/natural-travel-destination-beautiful-mountain-nature-amazing-sky-scenery_1105964-1249.jpg?semt=ais_hybrid&w=740&q=80',
      'https://images.unsplash.com/photo-1620053580376-3de604e91953?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fHww'
    ]


  } catch (error) {
    console.log("HF SDK Error:", error.message);
    throw error;
  }
};


module.exports = {
  generateImageFromPromptByHuggingFace,
};
