import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

export const BackendHealthSchema = z.object({
  status: z.string(),
});

export function useBackendHealth() {
  return useQuery({
    queryKey: ["backend.health"],
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/health`);
      if (!res.ok) throw new Error("Failed to fetch backend health");
      const data = await res.json();
      return BackendHealthSchema.parse(data);
    },
  });
}
