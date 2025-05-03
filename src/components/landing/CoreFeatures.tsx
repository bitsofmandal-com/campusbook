import cubeLeg from "@/assets/cube-leg.png";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';
import { JSX } from "react";
import { ChartIcon, MagnifierIcon, WalletIcon } from "./Icons";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Digital Learning Management System",
    description:
      "Monetize your expertise with ease with online content. Offer exclusive courses, workshops, and materials to your community, unlocking new revenue streams.",
    icon: <WalletIcon />,
  },
  {
    title: "Your Own Brand Website",
    description:
      "Effortlessly organize and deliver your courses. Manage content, track progress, and engage your learners with powerful tools built for creators.",
    icon: <MagnifierIcon />,
  },
  {
    title: "Email Courses and Marketing",
    description:
      "Save time and boost efficiency. Automate routine tasks like grading, notifications, and course updates, so you can focus on what matters—teaching.",
    icon: <ChartIcon />,
  },
];

export const CoreFeatures = () => {
  return (
    <section className="container py-24 sm:py-32 flex flex-col items-center justify-center mx-auto">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Build community{" "}
            </span>
            with Confidence
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Create thriving learning communities with ease. Engage, inspire, and
            grow your audience with tools designed for seamless interaction and
            collaboration.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <Image
          src={cubeLeg.src}
          width={300}
          height={500}          
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
