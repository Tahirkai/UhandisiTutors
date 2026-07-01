import { motion } from "framer-motion";
import { ArrowRight, Star, Users, TrendingUp, Award, BookOpen, Clock, Shield, Lightbulb } from "lucide-react";
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

const whyChooseUs = [
  {
    icon: BookOpen,
    title: "Personalised Tutoring",
    description: "One-on-one learning plans tailored to each student's unique goals.",
  },
  {
    icon: Award,
    title: "Expert Tutors",
    description: "Highly qualified tutors with deep subject knowledge and proven expertise.",
  },
  {
    icon: Clock,
    title: "Flexible Sessions",
    description: "Choose online or in-person sessions that fit your schedule and learning style.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Trackable progress and measurable improvement in every student.",
  },
  {
    icon: Shield,
    title: "Safe & Supportive",
    description: "A welcoming environment that builds confidence and inspires growth.",
  },
  {
    icon: Lightbulb,
    title: "Holistic Learning",
    description: "Beyond academics—building critical thinking, confidence, and a love for learning.",
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
                  document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Learn More
              </Button>
            </motion.div>
          </div>

          {/* Right column: Stats + Why Choose Us panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="w-full lg:w-[52%] xl:w-[50%] shrink-0"
          >
            <div className="rounded-2xl border border-white/10 bg-navy-dark/60 backdrop-blur-md p-5 sm:p-6 shadow-2xl">

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 + i * 0.08 }}
                    className="rounded-xl bg-white/5 border border-white/10 p-3 sm:p-4 flex flex-col gap-2"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                        <stat.icon className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-xl sm:text-2xl font-heading font-bold text-white leading-none">
                        {stat.value}
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs font-semibold text-gold-light leading-tight">
                      {stat.label}
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-white/50 leading-snug hidden sm:block">
                      {stat.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Why Choose Us heading */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="text-sm font-semibold text-white/80 mb-3"
              >
                Why Choose Us
              </motion.p>

              {/* Features grid */}
              <div className="grid grid-cols-3 gap-3">
                {whyChooseUs.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.75 + i * 0.07 }}
                    className="rounded-xl bg-white/5 border border-white/10 p-3 sm:p-4 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg bg-accent/20 flex items-center justify-center mb-2">
                      <item.icon className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <p className="text-xs font-semibold text-white leading-tight mb-1">
                      {item.title}
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-white/50 leading-snug hidden sm:block">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>

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
