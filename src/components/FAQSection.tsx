import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CircleHelp as HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I sign up for tutoring?",
    answer:
      "To register please make use of the booking portal and register as a student with all relevant information.",
  },
  {
    question: "Which curriculum do you follow?",
    answer:
      "We follow the South African CAPS curriculum. However, students who follow the IEB curriculum do benefit a lot from our lessons because the content is fairly similar.",
  },
  {
    question: "Do you offer online lessons?",
    answer:
      "We offer both online and face-to-face lessons. Online lessons are a great option for students based outside of Cape Town. Face-to-face lessons are only available to Cape Town clients and are held at the University of Cape Town, Upper Campus.",
  },
  {
    question: "Is the tutoring limited to group lessons?",
    answer:
      "No, we offer both group lessons and one-on-one lessons. You can choose the format that works best for your learning style and schedule.",
  },
  {
    question: "What subjects do you offer?",
    answer:
      "We offer Mathematics, Advanced Mathematics, Physical Science, Computer Applications Technology (CAT), English, Academic Writing & Research, and Physics.",
  },
  {
    question: "Who are the tutors?",
    answer:
      "Uhandisi tutors are all STEM graduates from the University of Cape Town with vast experience in their academic subjects. The majority of the tutors are from the engineering faculty.",
  },
  {
    question: "If I have questions or concerns, whom do I contact?",
    answer: "Contact the manager (Matome) on 078 710 2557 for any questions or concerns.",
  },
  {
    question: "How do you track progress?",
    answer:
      "We assess students every 5–6 weeks and return feedback directly to parents, keeping you informed of your child's academic growth.",
  },
  {
    question: "What happens if I miss a lesson?",
    answer:
      "All lessons are recorded and posted on the website and possibly on Google Drive. Students who miss a class can retrieve and watch the recording as many times as they wish to avoid falling behind.",
  },
  {
    question: "When are the lessons held?",
    answer:
      "For online lessons, we have a set timetable for the classes. A team meeting link is sent to the student group chat. Soon, links will be sent via the website directly to students.",
  },
  {
    question: "Which payment methods do you accept?",
    answer: "We prefer EFT and direct deposit payments.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-20 sm:py-28 bg-warm relative">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(var(--navy)) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-gold-dark mb-3 block">
            Want to know more?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Frequently Asked{" "}
            <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            These are a few of our most common questions. Can&apos;t find what
            you&apos;re looking for? Reach out to us directly.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border overflow-hidden data-[state=open]:border-accent/50 transition-colors"
                >
                  <AccordionTrigger className="px-6 py-5 text-left text-sm sm:text-base font-semibold font-heading text-foreground hover:no-underline hover:bg-secondary/50 transition-colors [&[data-state=open]>svg]:rotate-180">
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-gold-dark flex-shrink-0" />
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
