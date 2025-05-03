"use client";
import { Button } from "@/components/ui/button";
import { useBackendHealth } from "@/hooks/api/health";
import { WORKSPACE_PAGE } from "@/routes";
import { signIn } from "next-auth/react";
export default function HomePageClient() {
  const { data, error, isLoading } = useBackendHealth();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  else
    return (
      <div className="mx-auto my-10">
        <p>BACKEND : {data && data.status}</p>
        <Button
          onClick={() =>
            signIn("zitadel", {
              redirectTo: WORKSPACE_PAGE,
            })
          }
        >
          Login
        </Button>
      </div>
    );
}
