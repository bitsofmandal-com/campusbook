import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export function SignOutButton() {
  return (
    <form
      action={async () => {
        await signOut();
      }}
      className="w-full"
    >
      <Button type="submit" variant="destructive" className="min-w-full">
        Sign Out
      </Button>
    </form>
  );
}
