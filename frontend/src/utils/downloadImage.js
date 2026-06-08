export const downloadImage = async (imgUrl, index) => {
  try {
    const response = await fetch(imgUrl);
    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = `generated-image-${index + 1}.png`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.log("Download failed:", error);
  }
};
