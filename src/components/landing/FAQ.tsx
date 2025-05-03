import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Is there a free trial available?",
    answer:
      "No, instead we offer a limited period lifetime purchase for first 20 new users. You'll have full access to all features and all future updates.",
    value: "item-1",
  },
  {
    question: "What is a Learning Community SaaS for Creators?",
    answer:
      "Our platform enables creators to build, manage, and scale their own learning communities. It offers tools for hosting cohort-based courses, fostering peer-to-peer engagement, and tracking learner progress—all within an integrated, interactive environment.",
    value: "item-2",
  },
  {
    question: "Is my community data secure on the platform?",
    answer:
      "We take security very seriously. The platform uses advanced encryption protocols to safeguard your community data. Regular backups and secure data handling practices ensure that both creator and learner information remains private and protected.",
    value: "item-3",
  },
  {
    question: "What kind of customization options are available?",
    answer:
      "We offer robust customization tools that let you tailor the look and feel of your community. You can customize branding elements like logos, colors, and themes to align with your brand identity and create a seamless experience for your audience.",
    value: "item-4",
  },
  {
    question: "Is the platform mobile-friendly?",
    answer:
      "Yes, our platform is fully optimized for mobile use. Learners and creators can access all features, engage in live classes, and participate in discussions directly from their smartphones or tablets, ensuring learning happens on the go.",
    value: "item-5",
  },
  {
    question: "How do I grow my learning community using the platform?",
    answer:
      "Our platform provides growth tools like referral programs, community invites, and social media sharing integrations to help you expand your audience. Additionally, analytics can help you identify areas for improvement and optimize your courses to retain and attract learners.",
    value: "item-6",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32 flex flex-col items-center justify-center mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
