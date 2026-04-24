import { apiInstance } from "../api/apiInstance";

export const getPrompts = async () => {
    try {
        const response = await apiInstance.get('/prompts');
        return response.data;
    } catch (error) {
        console.error('Error fetching prompts:', error);
        throw error;
    }
};