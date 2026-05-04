import { useEffect, useState } from "react";
import { apiInstance } from "../api/apiInstance";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const res = await apiInstance.get("/auth/me");
      setUser(res?.data?.user);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return {
    user,
    setUser,
    loading,
    fetchUser,
  };
};
