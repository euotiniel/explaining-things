import { useState } from "react";

export function useSubscribe() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const subscribe = async (email: string) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error("Erro ao adicionar e enviar email.");

      return { success: true };
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  return { subscribe, loading, error };
}