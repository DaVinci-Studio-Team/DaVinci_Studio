import { apiInstance } from "../api/apiInstance";

export const toggleVisibility = async (imageId) => {
  const response = await apiInstance.patch(`/image/${imageId}/visibility`);

  return response.data;
};

export const deleteImage = async (imageId) => {
  const response = await apiInstance.delete(`/image/${imageId}`);

  return response.data;
};
