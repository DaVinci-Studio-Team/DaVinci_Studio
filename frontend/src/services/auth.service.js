import { apiInstance } from "../api/apiInstance";

export const registerUser = async (data) => {
  const response = await apiInstance.post("/auth/register", data);
  return response.data;
};