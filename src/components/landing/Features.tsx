import customPage from "@/assets/custom-page.png";
import digitalDownload from "@/assets/digital-download.png";
import liveMooc from "@/assets/live-mooc.png";
import ownBrand from "@/assets/own-brand.png";
import reading from "@/assets/reading.png";
import reflecting from "@/assets/reflecting.png";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Custom website",
    description:
      "SEO friendly website to build your community with custom domain and branding",
    image: ownBrand.src,
  },
  {
    title: "Pre-Recorded Online Courses",
    description:
      "Create MOOCs with assessments, video tutorials including live classes",
    image: reading.src,
  },
  {
    title: "Digital Downloads",
    description: "Easily sell your notes, eBooks, PDFs, audio clips and more.",
    image: digitalDownload.src,
  },
  {
    title: "Email Marketing",
    description:
      "Our email marketing tool to send newsletters, updates, and more to your community",
    image: liveMooc.src,
  },
  {
    title: "Schedule Calls",
    description:
      "Manage your appointments, schedule calls, and meetings with your community or clients",
    image: customPage.src,
  },
  {
    title: "AI-Powered insights",
    description:
      "Understand your community. Our AI surfaces top comments and ideas from community",
    image: reflecting.src,
  },
];

const featureList: string[] = [
  "Community",
  "Engagement",
  "Automation",
  "Monetization",
  "Collaboration",
  "Personalization",
  "Live-Sessions",
  "Customization",
  "Certification",
  "Security",
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8 flex flex-col items-center justify-center mx-auto">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center mx-auto max-w-4xl gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card
            key={title}
            className="relative border border-orange-200 dark:border-orange-500"
          >
            <div className="relative w-full">
              <img
                src={image}
                alt="About feature"
                className="w-full h-auto object-cover"
              />

              <div className="absolute inset-0 bg-white/30 hover:bg-white/10 dark:bg-black/30 dark:hover:bg-black/10 flex flex-col justify-end p-4">
                <div className="bg-orange-500 opacity-95 z-10 rounded-lg">
                  <CardHeader className="z-20 text-center text-white">
                    <CardTitle>{title}</CardTitle>
                  </CardHeader>

                  <CardContent className="z-20 text-center text-white">
                    {description}
                  </CardContent>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
