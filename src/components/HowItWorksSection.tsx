import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ExternalLink,
  UserPlus,
  ClipboardList,
  Monitor,
  CalendarCheck,
} from "lucide-react";

const steps = [
  {
    icon: ExternalLink,
    title: "Go to Booking Portal",
    description:
      "Head over to our booking portal to get started with your tutoring journey.",
  },
  {
    icon: UserPlus,
    title: "Sign Up as a Student",
    description:
      "Create your student account with a few quick details so we know who you are.",
  },
  {
    icon: ClipboardList,
    title: "Fill in Required Info",
    description:
      "Tell us about your academic goals, current level, and any specific areas you need help with.",
  },
  {
    icon: Monitor,
    title: "Select Subject & Mode",
    description:
      "Pick the subjects you need help with and choose between face-to-face or online tutoring.",
  },
  {
    icon: CalendarCheck,
    title: "Get Your Session Link",
    description:
      "Sit back while we match you with the perfect tutor. You will receive a link to your confirmed session.",
  },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-warm relative">
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
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            How It <span className="text-gradient-gold">Works</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Getting started with Uhandisi Tutors is easy. Follow these five
            simple steps and be on your way to academic success.
          </p>
        </motion.div>

        {/* Steps — Desktop: horizontal; Mobile: vertical */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[2.25rem] left-[10%] right-[10%] h-px bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Number + Icon circle */}
                <div className="relative mb-6">
                  <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-card border-2 border-border group-hover:border-accent/60 flex items-center justify-center transition-colors duration-300 shadow-sm z-10 relative">
                    <step.icon className="w-6 h-6 text-gold-dark" />
                  </div>
                  {/* Step number badge */}
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center shadow-sm">
                    {index + 1}
                  </span>
                </div>

                {/* Text */}
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[16rem]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;