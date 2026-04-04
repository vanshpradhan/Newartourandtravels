import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-secondary text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-20 pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link to="/" className="flex flex-col mb-8 group">
              <span className="font-bold text-3xl tracking-[0.3em] text-white uppercase group-hover:text-accent transition-colors">
                NEWAR
              </span>
              <div className="w-12 h-[1px] bg-accent mt-2 transition-all duration-500 group-hover:w-24"></div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-8 font-sub">
              Curating bespoke, high-end travel experiences across Bhutan and Sikkim. We transform your Himalayan dreams into extraordinary realities with unparalleled luxury and local expertise.
            </p>
            <div className="flex space-x-5">
              {[
                { icon: Instagram, href: "https://www.instagram.com/newartourandtravels?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
                { icon: Facebook, href: "https://www.facebook.com/share/17AhznbfVj/?mibextid=wwXIfr" },
                { icon: MessageCircle, href: "https://wa.me/917547993621" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary transition-all duration-500 group"
                >
                  <social.icon className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
                </a>
              ))}
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center mt-6 px-6 py-3 rounded-full bg-accent text-primary font-bold uppercase tracking-[0.12em] text-xs hover:bg-accent-light transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-10 text-accent">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Destinations', path: '/destinations' },
                { name: 'Tour Packages', path: '/packages' },
                { name: 'Contact Us', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/50 hover:text-white transition-all duration-300 flex items-center group text-sm font-sub">
                    <span className="w-0 h-[1px] bg-accent mr-0 group-hover:w-4 group-hover:mr-3 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-10 text-accent">Get In Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mr-4 shrink-0 group-hover:bg-accent/10 transition-colors">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <span className="text-white/50 text-sm leading-relaxed font-sub group-hover:text-white transition-colors">
                  KB Pradhan Plaza, NS Road,<br />Jaigaon, West Bengal
                </span>
              </li>
              <li className="flex items-center group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mr-4 shrink-0 group-hover:bg-accent/10 transition-colors">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <div className="flex flex-col">
                  <a href="tel:7547993621" className="text-white/50 text-sm hover:text-white transition-colors font-sub">7547993621</a>
                  <a href="tel:8927087805" className="text-white/50 text-sm hover:text-white transition-colors font-sub">8927087805</a>
                </div>
              </li>
              <li className="flex items-center group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mr-4 shrink-0 group-hover:bg-accent/10 transition-colors">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <a href="mailto:Newartourandtravel12@gmail.com" className="text-white/50 text-sm hover:text-white transition-colors font-sub group-hover:text-white">Newartourandtravel12@gmail.com</a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} NEWAR. Crafted for the extraordinary.
          </p>
          <div className="flex space-x-10 text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
