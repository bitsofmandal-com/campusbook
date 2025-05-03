import { Button } from "@/components/ui/button";

export const Cta = () => {
  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32 flex flex-col items-center justify-center mx-auto">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            All Your
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Content and Audience{" "}
            </span>
            In One Place
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            If you are serious about building a digital audience, then Subsribe
            to a future call with us. We will notify you when the product is
            ready and send you a demo
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto">
            Request a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};
