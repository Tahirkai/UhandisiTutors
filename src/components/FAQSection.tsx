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
      "Our Lessons are algined with the South African CAPS curriculum. Students following the IEB curriculum also benefit significantly as the core content is very similar.",
  },
  {
    question: "Do you offer online lessons?",
    answer:
      "We offer both online and face-to-face lessons. Online lessons are a great option for students based outside of Cape Town. Face-to-face lessons are only available to Cape Town clients and are held at the University of Cape Town, Upper Campus.",
  },
  {
    question: "Who are the tutors?",
    answer:
      "Our tutors are STEM graduates from the University of Cape Town, most from the Engineerin faculty, with strong academic backgroundsand tutoring experience.",
  },
  {
    question: "How do you track progress?",
    answer:
      "We conduct informal assessments every 4-5 weeks and provide detailed feedback directly to parents",
  },
  {
    question: "What happens if I miss a lesson?",
    answer:
      "All lessons are recorded and posted on the website and possibly on Google Drive. Students who miss a class can retrieve and watch the recording as many times as they wish to avoid falling behind. In-person sessions are not recorded.",
  },
  {
    question: "When are the lessons held?",
    answer:
      "For online lessons, we have a set timetable for the classes. A team meeting link is sent to the student group chat. Soon, links will be sent via the website directly to students.",
  },
  {
    question: "Which payment methods do you accept?",
    answer: "We only accept EFT and direct deposit payments.",
  },
   {
    question: "Who should I contact for questions or concerns?",
    answer: "Contact the manager (Matome) on 078 710 2557 for any questions or concerns.",
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

        {/* FAQ Accordion — Two Columns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start">
            {/* Left Column */}
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.slice(0, 6).map((faq, index) => (
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

            {/* Right Column */}
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.slice(6).map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + (index + 6) * 0.05 }}
                >
                  <AccordionItem
                    value={`item-${index + 6}`}
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
