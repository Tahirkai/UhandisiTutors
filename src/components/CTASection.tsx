import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const BOOKING_URL = "https://www.myuhandisitutors.co.za/";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 sm:py-28 bg-navy-gradient relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-navy-gradient rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold-light">
                Start Your Journey Today
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4 leading-tight">
              Ready to{" "}
              <span className="text-white">Transform</span>
              <br />
              Your Grades?
            </h2>

            <p className="text-primary-foreground/70 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Join hundreds of students who have already improved their academic
              performance with Uhandisi Tutors. Book your first session today.
            </p>

            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-gold-dark font-semibold shadow-gold text-base px-10 py-6 transition-all hover:scale-105 group"
              >
                Book a Session Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
