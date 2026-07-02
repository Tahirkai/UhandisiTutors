import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Calculator,
  Cog,
  FlaskConical,
  BookOpen,
  FileText,
  Microscope,
} from "lucide-react";

const subjects = [
  {
    icon: Calculator,
    name: "Mathematics & Advanced Mathematics",
    description: "Algebra, Calculus, Statistics & more",
    levels: "Grade 8–12, University",
  },
  {
    icon: Microscope,
    name: "Physical Science",
    description: "Physics and Chemistry tutoring for high school students",
    levels: "Grade 8–12, University",
  },
  {
    icon: Cog,
    name: "Computer Applications Technology (CAT) & IT Modules",
    description: "CAT and basic IT skills training for high school curriculum",
    levels: "Grade 8–12, University",
  },
  {
    icon: BookOpen,
    name: "English",
    description: "Language arts, essay writing, and life skills support",
    levels: "Grade 8–12, University",
  },
  {icon: FileText,
    name: "Academic Writing & Research",
    description: "Academic writing, research guidance, and exam preparation",
    levels: "University",
  },
  {
    icon: FlaskConical,
    name: "Physics - Group lessons",
    description: "Fist year physics designed for UCT engineering students. The lessons run in group setting.",
    levels: "University",
  },
];

const SubjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="subjects" className="py-20 sm:py-28 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-gold-dark mb-3 block">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Subjects We <span className="text-gradient-gold">Cover</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            From high school to university, we provide expert tutoring across a wide range
            of STEM subjects and beyond.
          </p>
        </motion.div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {subjects.map((subject, index) => (
            <motion.div
              key={subject.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300"
            >
              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-accent via-gold-light to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
                    <subject.icon className="w-6 h-6 text-navy group-hover:text-gold-dark transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
                      {subject.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {subject.description}
                    </p>
                    <span className="inline-block text-xs font-medium bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full">
                      {subject.levels}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubjectsSection;
