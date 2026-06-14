import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Users, Clock, Award, BookOpen, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Tutors",
    description:
      "Our tutors are carefully selected professionals with deep subject expertise and a passion for teaching.",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Subjects",
    description:
      "From high school maths and science to university-level engineering courses, we cover it all.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Book sessions that fit your schedule. We offer both in-person and online tutoring options.",
  },
  {
    icon: Shield,
    title: "Safe Learning Space",
    description:
      "We create a positive, supportive environment where students feel comfortable asking questions.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description:
      "Our students consistently show significant grade improvement and increased confidence.",
  },
  {
    icon: Lightbulb,
    title: "Personalised Approach",
    description:
      "Every student learns differently. We tailor our methods to match individual learning styles.",
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 sm:py-28 bg-warm relative">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "radial-gradient(circle, hsl(var(--navy)) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      <div className="container mx-auto px-4 sm:px-6 relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-gold-dark mb-3 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            The Uhandisi <span className="text-gradient-gold">Difference</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            We go beyond traditional tutoring to deliver a transformative learning experience
            that builds confidence and drives real academic results.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-xl p-6 sm:p-8 border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-gold/20 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-6 h-6 text-gold-dark" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
