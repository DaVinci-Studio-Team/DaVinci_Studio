import { useEffect, useState } from "react";
import { apiInstance } from "../api/apiInstance";

export const useMyImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMyImages = async () => {
    setLoading(true);
    try {
      const res = await apiInstance.get("/image/me");
      console.log("Images", res?.data?.images)
      setImages(res?.data?.images || res?.data || []);
      setError(null);
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to fetch your images");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyImages();
  }, []);

  return {
    images,
    loading,
    error,
    refresh: fetchMyImages,
  };
};
