import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Thanks to Uhandisi Tutors, my daughter's grades have improved dramatically, and she is now more confident in herself and loves going to class!",
    author: "Sarah L.",
    role: "Parent",
    rating: 5,
  },
  {
    quote:
      "The tutors really take their time to explain concepts until you understand. My marks in engineering went from 45% to 78% in one semester.",
    author: "Thabo M.",
    role: "University Student",
    rating: 5,
  },
  {
    quote:
      "I was struggling with Physical Science and thought I'd never pass. Uhandisi Tutors changed that completely. I got a distinction!",
    author: "Naledi K.",
    role: "Grade 12 Student",
    rating: 5,
  },
  {
    quote:
      "Professional, patient, and extremely knowledgeable. The online sessions are just as effective as in-person ones. Highly recommended!",
    author: "James O.",
    role: "Parent",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="py-20 sm:py-28 bg-navy-gradient relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-gold-light mb-3 block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            What Our <span className="text-white">Students Say</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 sm:p-12 text-center relative">
            <Quote className="w-10 h-10 text-white/60 mx-auto mb-6" />
            
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                />
              ))}
            </div>

            <p className="text-lg sm:text-xl text-primary-foreground/90 leading-relaxed mb-8 font-body italic">
              "{t.quote}"
            </p>

            <div>
              <p className="font-heading font-semibold text-primary-foreground text-lg">
                {t.author}
              </p>
              <p className="text-primary-foreground/60 text-sm">{t.role}</p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:border-accent transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === current
                        ? "bg-accent w-6"
                        : "bg-primary-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:border-accent transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
