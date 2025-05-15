import { HeroCards } from "@/components/landing/HeroCards";
import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth-client";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mx-auto">
      <div className="p-20">
        <h2 className="w-full text-5xl font-black p-2">
          AI Enabled tools for Online Communities
        </h2>
        <p className=" text-xl text-muted-foreground mx-auto lg:mx-0">
          Easy tools to manage 99% of your TEACHING BUSINESS for small teams
        </p>

        <div className="mt-16 mx-auto flex justify-center items-center">
          <form
            action={async () => {
              "use server";
              await signIn.social({
                provider: "google",
                callbackURL: "/workspace",
                errorCallbackURL: "/error",
                newUserCallbackURL: "/welcome",
                disableRedirect: true,
              });
            }}
            className="space-x-2"
          >
            <Button>Schedule Demo (coming soon)</Button>
            <Button type="submit">Login</Button>
          </form>
        </div>
      </div>
      <HeroCards />
    </div>
  );
};
