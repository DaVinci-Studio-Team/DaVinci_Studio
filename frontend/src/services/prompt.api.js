import {apiInstance}  from "../api/apiInstance";

export const generateImageAPI = async ({ prompt, style, numImages = 1 }) => {
  const response = await apiInstance.post("/prompt/huggingface/generate-image", {
    prompt,
    style,
    numImages,
  });

  return response.data;
};