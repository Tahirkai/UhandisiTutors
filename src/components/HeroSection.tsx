import { motion } from "framer-motion";
import { ArrowRight, Star, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-students.jpg";

const BOOKING_URL = "https://www.myuhandisitutors.co.za/";

const stats = [
  {
    icon: Users,
    value: "2000+",
    label: "Students Helped",
    description: "Empowering learners to achieve their academic goals.",
  },
  {
    icon: Star,
    value: "30+",
    label: "Expert Tutors",
    description: "Highly qualified tutors with deep subject knowledge and proven expertise.",
  },
  {
    icon: TrendingUp,
    value: "60%",
    label: "Grade Improvement",
    description: "Average grade improvement achieved by our students.",
  },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Students learning together"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-navy/80 to-navy-light/70" />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-20 pb-12">
        <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-16">

          {/* Left column */}
          <div className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-4 py-1.5 mb-6"
            >
              <Star className="w-4 h-4 text-gold" fill="currentColor" />
              <span className="text-sm font-medium text-gold-light">
                The Pinnacle of Study Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-heading font-bold text-primary-foreground leading-[1.1] mb-6"
            >
              Where Learning{" "}
              <span className="text-gradient-gold">Meets Excellence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-primary-foreground/75 max-w-lg mb-8 font-body leading-relaxed"
            >
              We create a safe and positive space that encourages curiosity, creativity,
              and growth. Expert tutoring in Maths, Science & Engineering.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-gold-dark font-semibold shadow-gold text-base px-8 py-6 transition-all hover:scale-105 group"
                >
                  Book a Session
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary font-semibold text-base px-8 py-6 transition-all"
                onClick={() =>
                  document.querySelector("#subjects")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Subjects
              </Button>
            </motion.div>
          </div>

          {/* Right column: Stats panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="w-full lg:w-[55%] xl:w-[52%] shrink-0"
          >
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.45 + i * 0.1 }}
                  className="rounded-2xl border border-white/15 bg-navy-dark/55 backdrop-blur-md p-6 sm:p-8 flex flex-col items-center text-center gap-4"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-accent flex items-center justify-center shadow-lg shadow-accent/30">
                    <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>

                  {/* Value */}
                  <span className="text-3xl sm:text-4xl font-heading font-bold text-white leading-none">
                    {stat.value}
                  </span>

                  {/* Label */}
                  <p className="text-sm sm:text-base font-semibold text-white leading-tight">
                    {stat.label}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-white/55 leading-relaxed">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
