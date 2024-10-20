import PageWithNavbar from "@/components/layout/page";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is this app about?",
    answer:
      "This app allows users to register their moods within different communities (e.g., office departments, hospital floors, DAOs, hackathon sponsors). It helps track the overall mood, mental health, and potential conflicts within communities, providing a reputational and quantitative assessment of a community’s health.",
  },
  {
    question: "How does mood submission work?",
    answer:
      "You can select the community you're part of and submit your current mood (e.g., happy, neutral, stressed). Your mood submission helps build a real-time view of the emotional state of your community.",
  },
  {
    question: "What are the possible mood options I can submit?",
    answer:
      "You can submit one of six moods: Happy 😊, Sad 😢, Nervous 😰, Angry 😠, Tired 😴 or Frustrated 😤. Each mood reflects your emotional state and helps assess the community’s health.",
  },
  {
    question: "What happens to my mood submission?",
    answer:
      "Your mood submission is aggregated with others in your community. The app calculates an average mood score for the community, providing insights into how the community is doing emotionally over time.",
  },
  {
    question: "Who can see my mood?",
    answer:
      "Your individual mood submission is private, but the overall community mood is visible to all members. This way, everyone can see the general emotional state of the community without revealing personal details.",
  },
  {
    question: "Can I submit multiple moods in a day?",
    answer:
      "Typically, you are allowed to submit one mood per day per community. This ensures that the data is meaningful and not skewed by multiple entries from the same user in a short time frame.",
  },
  {
    question: "How are communities defined?",
    answer:
      "Communities can be any group, such as office departments, DAOs, project teams, hackathon sponsors, or even hospital floors. Each community is tracked individually, and you can join multiple communities if you're part of more than one.",
  },
  {
    question: "How can I join a community?",
    answer:
      "You can join a community by getting added as a member of that community. Communities are managed by administrators, and you’ll need to be registered by them to participate and submit moods.",
  },
  {
    question: "Can I see the health of the communities I belong to?",
    answer:
      "Yes! You can view the overall health score of the communities you're part of. This score is based on the mood submissions from all members and gives a quick glance at how the community is doing.",
  },
  {
    question: "What is the community health score?",
    answer:
      "The community health score is calculated based on mood submissions. Positive moods (happy) contribute to a higher score, while negative moods (stressed) lower it. The score gives a sense of the community’s mental health and overall well-being.",
  },
  {
    question: "Can communities track trends over time?",
    answer:
      "Yes, communities can view mood trends over time, identifying periods of high stress or overall happiness. This can help leaders take action to resolve conflicts or support members better.",
  },
  {
    question: "Why should I submit my mood?",
    answer:
      "By submitting your mood, you’re helping your community monitor its emotional state. This collective information can improve mental health, resolve conflicts, and foster a supportive environment.",
  },
  {
    question: "Can community admins see more detailed reports?",
    answer:
      "Community admins can access detailed insights, such as mood trends over time, to help them understand potential issues like stress spikes or ongoing mental health concerns in the community.",
  },
  {
    question: "Is mood submission anonymous?",
    answer:
      "Yes, your personal mood submission is anonymous. The system only tracks the overall community mood to protect your privacy while contributing to the larger data set.",
  },
  {
    question: "How do I add a new community?",
    answer:
      "Communities are typically added by the app administrator. If you want to add a new community, you can request it from your community leader or the app admin.",
  },
];

export default function Faq() {
  return (
    <PageWithNavbar>
      <div className="page">
        <div className="container md:pt-4">
          <h1 className="mb-4 text-6xl">FAQ</h1>
          <div className="max-w-3xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-6">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <Link href="/">
            <Button className={`mt-6 h-12 text-lg md:mt-8 lg:mt-8 xl:mt-12`}>
              Back
            </Button>
          </Link>
        </div>
      </div>
    </PageWithNavbar>
  );
}
