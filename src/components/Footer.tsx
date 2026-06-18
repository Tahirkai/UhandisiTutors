import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const BOOKING_URL = "https://www.myuhandisitutors.co.za/";

const Footer = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-accent-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold leading-tight">
                  Uhandisi
                </span>
                <span className="text-[10px] font-medium tracking-widest uppercase text-primary-foreground/60 -mt-0.5">
                  Tutors
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              Where Learning Meets Excellence. Expert tutoring in Maths, Science &
              Engineering for high school and university students.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Subjects", href: "#subjects" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-primary-foreground/50 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/50 hover:text-accent transition-colors"
                >
                  Booking Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/50">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span>info@uhandistutors.co.za</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/50">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span>+27 XX XXX XXXX</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/50">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>South Africa</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center text-primary-foreground/50 hover:text-accent hover:border-accent/40 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-xs text-primary-foreground/30 mt-6">
              Follow us on social media for study tips, updates, and more.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} Uhandisi Tutors. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
