import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, ArrowRight, Send } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-20 pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Newsletter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 pb-20 border-b border-white/10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">
              Join the <span className="text-accent">NEWAR</span> Inner Circle
            </h3>
            <p className="text-white/60 text-lg max-w-md font-sub">
              Receive exclusive travel guides, early access to new packages, and stories from the heart of the Himalayas.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex-grow group">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-4 text-white focus:outline-none focus:border-accent transition-all duration-300 group-hover:bg-white/10"
                />
                <Mail className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-accent transition-colors" />
              </div>
              <button className="bg-accent hover:bg-accent-light text-primary font-bold px-10 py-4 rounded-full transition-all duration-300 flex items-center justify-center group active:scale-95">
                Subscribe <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
            <p className="text-[10px] text-white/30 mt-4 uppercase tracking-[0.2em] font-black">
              * We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
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
                { icon: Instagram, href: "https://www.instagram.com/newartourandtravels" },
                { icon: Facebook, href: "https://www.facebook.com" }
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

          {/* Popular Packages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-10 text-accent">Featured Journeys</h4>
            <ul className="space-y-4">
              {[
                'Bhutan Express Getaway',
                'Sikkim Himalayan Escape',
                'Darjeeling Tea Valley Retreat',
                'Meghalaya Waterfall Wonders'
              ].map((tour) => (
                <li key={tour}>
                  <Link to="/packages" className="text-white/50 hover:text-white transition-all duration-300 flex items-center group text-sm font-sub">
                    <span className="w-0 h-[1px] bg-accent mr-0 group-hover:w-4 group-hover:mr-3 transition-all duration-300"></span>
                    {tour}
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
                  KB Pradhan Plaza, NS Road,<br />Jaigaon, West Bengal, India
                </span>
              </li>
              <li className="flex items-center group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mr-4 shrink-0 group-hover:bg-accent/10 transition-colors">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <div className="flex flex-col">
                  <a href="tel:+917547993621" className="text-white/50 text-sm hover:text-white transition-colors font-sub">+91 7547993621</a>
                  <a href="tel:+918927087805" className="text-white/50 text-sm hover:text-white transition-colors font-sub">+91 8927087805</a>
                </div>
              </li>
              <li className="flex items-center group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mr-4 shrink-0 group-hover:bg-accent/10 transition-colors">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <a href="mailto:info@newartravels.com" className="text-white/50 text-sm hover:text-white transition-colors font-sub group-hover:text-white">info@newartravels.com</a>
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
