import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  GlobeIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

interface TeamProps {
  imageUrl: string;
  name: string;
  type: string;
  description?: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://i.pravatar.cc/150?img=35",
    name: "Sambhav Academy",
    type: "Tutoring Center",
    description: "Coaching for competitive exam preparation",
    socialNetworks: [],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=60",
    name: "Army Institute of Technology",
    type: "College",
    description: "Modern Engineering College for Bachelor of Engineering",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/school/army-institute-of-technology-ait-pune",
      },
      {
        name: "Website",
        url: "https://www.aitpune.com",
      },
    ],
  },
  // {
  //   imageUrl: "https://i.pravatar.cc/150?img=60",
  //   name: "John Doe",
  //   position: "Tech Lead",
  //   socialNetworks: [
  //     {
  //       name: "Linkedin",
  //       url: "https://www.linkedin.com/in/leopoldo-miranda/",
  //     },
  //     {
  //       name: "Facebook",
  //       url: "https://www.facebook.com/",
  //     },
  //     {
  //       name: "Instagram",
  //       url: "https://www.instagram.com/",
  //     },
  //   ],
  // },
  // {
  //   imageUrl: "https://i.pravatar.cc/150?img=36",
  //   name: "Ashley Ross",
  //   position: "Frontend Developer",
  //   socialNetworks: [
  //     {
  //       name: "Linkedin",
  //       url: "https://www.linkedin.com/in/leopoldo-miranda/",
  //     },

  //     {
  //       name: "Instagram",
  //       url: "https://www.instagram.com/",
  //     },
  //   ],
  // },
  // {
  //   imageUrl: "https://i.pravatar.cc/150?img=17",
  //   name: "Bruce Rogers",
  //   position: "Backend Developer",
  //   socialNetworks: [
  //     {
  //       name: "Linkedin",
  //       url: "https://www.linkedin.com/in/leopoldo-miranda/",
  //     },
  //     {
  //       name: "Facebook",
  //       url: "https://www.facebook.com/",
  //     },
  //   ],
  // },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <LinkedInLogoIcon />;

      case "Instagram":
        return <InstagramLogoIcon />;

      case "Website":
        return <GlobeIcon />;
    }
  };

  return (
    <section id="team" className="container py-24 sm:py-32 flex flex-col items-center justify-center mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold">
        Our Early{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Believers
        </span>
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        We are greatful to our trusted partners who believed early in our
        mission and helped shape the platform
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(
          ({
            imageUrl,
            name,
            type,
            description,
            socialNetworks,
          }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${type}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {type}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                <p>{description}</p>
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
