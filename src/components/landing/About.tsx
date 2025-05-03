import Pilot from "@/assets/pilot.png";
import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32 flex flex-col items-center justify-center mx-auto">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <div className="relative min-w-[400px] min-h-[400px]  rounded-lg">
            <Image
              src={Pilot.src}
              fill
              className="object-cover rounded-lg"
              alt="About services"
            />
          </div>
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                Why choose Supareel?
              </h2>
              <h2 className="text-xl md:text-2xl font-bold">
                Build and expand your digital community
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              If you are serious about building a digital audience, 
              then Subsribe to a future call with us. 
              We will notify you when the product is ready and send you a demo
              </p>
            </div>

            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                Community + Assets
              </h2>
              <h2 className="text-xl md:text-2xl font-bold">
                All Your Content and Audience In One Place
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                With Supareel, you can create meaningful connections, engage
                your audience, and scale effortlessly. Whether you&apos;re teaching,
                training, or sharing your expertise, our platform empowers you
                to manage, monetize, and maintain a vibrant learning
                ecosystem—all in one place. Elevate your community experience
                and watch it flourish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
