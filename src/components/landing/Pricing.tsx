import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PlanTagType {
  MOST_POPULAR = "Most Popular",
  LIMITED_PERIOD_DISCOUNT = "Limited Period Discount",
  TRIAL = "Trial",
  NONE = "",
}

interface PricingProps {
  title: string;
  planTag: PlanTagType;
  price: number;
  originalPrice?: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Free Trial",
    planTag: PlanTagType.TRIAL,
    price: 0,
    description:
      "Most ideal for early adopters to see the platform",
    buttonText: "Start Free 14 Day Trial",
    benefitList: [
      "1 Team member",
      "2 GB Storage",
      "Upto 4 pages",
      "Community support",
      "lorem ipsum dolor",
    ],
  },
  {
    title: "Basic",
    planTag: PlanTagType.LIMITED_PERIOD_DISCOUNT,
    price: 19,
    originalPrice: 30,
    description: "Suitable for independent creators",
    buttonText: "Get Started",
    benefitList: [
      "4 Team member",
      "4 GB Storage",
      "Upto 6 pages",
      "Priority support",
      "lorem ipsum dolor",
    ],
  },
  {
    title: "Enterprise",
    planTag: PlanTagType.NONE,
    price: 299,
    description: "Connect with us for custom pricing",
    buttonText: "Contact Us",
    benefitList: [
      "10 Team member",
      "8 GB Storage",
      "Upto 10 pages",
      "Priority support",
      "lorem ipsum dolor",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32 flex flex-col items-center justify-center mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Get
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Lifetime Unlimited{" "}
        </span>
        Access
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        First 20 users get the option to avail the early bird, One Time Pay
        offer.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.planTag !== PlanTagType.NONE
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.planTag !== PlanTagType.NONE ? (
                  <Badge variant="secondary" className="text-sm text-primary">
                    {pricing.planTag}
                  </Badge>
                ) : null}
              </CardTitle>
              <div className="flex flex-row items-start justify-between space-y-1">
                <div>
                  <span className="text-3xl font-bold">${pricing.price}</span>
                  {pricing.planTag !== PlanTagType.TRIAL && (
                    <span className="text-muted-foreground"> /month</span>
                  )}
                </div>
                {pricing.originalPrice && (
                  <div className="flex gap-2 align-middle">
                    <Badge
                      variant="secondary"
                      className="bg-green-200 hover:bg-green-200 text-green-900"
                    >
                      {(
                        ((pricing.originalPrice - pricing.price) /
                          pricing.originalPrice) *
                        100
                      ).toFixed(0)}
                      % off
                    </Badge>
                    <div className="flex flex-col justify-center text-muted-foreground line-through">
                      ${pricing.originalPrice}
                      /month
                    </div>
                  </div>
                )}
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className="flex">
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
