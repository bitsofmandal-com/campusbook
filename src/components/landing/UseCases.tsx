import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JSX } from "react";
import { GiftIcon, MapIcon, MedalIcon, PlaneIcon } from "./Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Tutoring Centers",
    description:
      "Streamline course management, engage students, and scale your tutoring center with ease using our powerful tools",
  },
  {
    icon: <MapIcon />,
    title: "Schools",
    description:
      "Enhance classroom learning with interactive digital tools, progress tracking, and seamless communication between teachers and students.",
  },
  {
    icon: <PlaneIcon />,
    title: "Content Creators",
    description:
      "Turn your content into thriving communities. Monetize your expertise and engage learners through personalized learning paths and live sessions",
  },
  {
    icon: <GiftIcon />,
    title: "Trainers",
    description:
      "Simplify your training process with automated assessments, real-time feedback, and detailed performance analytics",
  },
  {
    icon: <GiftIcon />,
    title: "Consultants",
    description:
      "Deliver tailored learning experiences to clients, track progress, and provide ongoing support—all from one platform",
  },
  {
    icon: <GiftIcon />,
    title: "Bootcamps",
    description:
      "Run immersive, cohort-based courses with built-in coding labs, assignments, and live interactions to enhance learning outcomes",
  },
];

export const UseCases = () => {
  return (
    <section id="usecases" className="container text-center py-24 sm:py-32 flex flex-col items-center justify-center mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold ">
        Who is{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Supareel for?
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Explore many ways supareel can help your business?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
