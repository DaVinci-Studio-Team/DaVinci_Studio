import {apiInstance}  from "../api/apiInstance";

export const generateImageAPI = async (prompt) => {
  const response = await apiInstance.post("/prompt/huggingface/generate-image", {
    prompt,
  });

  return response.data;
};