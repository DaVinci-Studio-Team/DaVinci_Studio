const GUEST_IMAGE_KEY = "guest_generated_image";
const GUEST_IMAGE_TIMESTAMP_KEY = "guest_image_timestamp";
const GUEST_IMAGE_PROMPT_KEY = "guest_image_prompt";
const GUEST_IMAGE_STYLE_KEY = "guest_image_style";

export const saveGuestImage = (imageUrl, prompt = "", style = "Normal") => {
  try {
    const timestamp = new Date().toISOString();
    localStorage.setItem(GUEST_IMAGE_KEY, imageUrl);
    localStorage.setItem(GUEST_IMAGE_TIMESTAMP_KEY, timestamp);
    localStorage.setItem(GUEST_IMAGE_PROMPT_KEY, prompt);
    localStorage.setItem(GUEST_IMAGE_STYLE_KEY, style);
    return true;
  } catch (error) {
    console.error("Failed to save guest image:", error);
    return false;
  }
};

export const getGuestImage = () => {
  try {
    const imageUrl = localStorage.getItem(GUEST_IMAGE_KEY);
    const timestamp = localStorage.getItem(GUEST_IMAGE_TIMESTAMP_KEY);
    const prompt = localStorage.getItem(GUEST_IMAGE_PROMPT_KEY);
    const style = localStorage.getItem(GUEST_IMAGE_STYLE_KEY);

    if (!imageUrl) {
      return null;
    }

    return {
      imageUrl,
      prompt,
      style,
      timestamp,
    };
  } catch (error) {
    console.error("Failed to retrieve guest image:", error);
    return null;
  }
};

export const hasGuestGenerated = () => {
  try {
    return localStorage.getItem(GUEST_IMAGE_KEY) !== null;
  } catch (error) {
    console.error("Failed to check guest generation status:", error);
    return false;
  }
};

export const clearGuestImage = () => {
  try {
    localStorage.removeItem(GUEST_IMAGE_KEY);
    localStorage.removeItem(GUEST_IMAGE_TIMESTAMP_KEY);
    localStorage.removeItem(GUEST_IMAGE_PROMPT_KEY);
    localStorage.removeItem(GUEST_IMAGE_STYLE_KEY);
    return true;
  } catch (error) {
    console.error("Failed to clear guest image:", error);
    return false;
  }
};

export const getGuestRemainingGenerations = () => {
  return hasGuestGenerated() ? 0 : 1;
};