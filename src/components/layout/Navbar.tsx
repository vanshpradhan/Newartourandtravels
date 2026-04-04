import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Phone, MessageCircle, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import logoImage from '../../../Images/logonav.png';

const navLinks = [
  { name: 'Destination', path: '/destinations' },
  { name: 'Packages', path: '/packages' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'About Us', path: '/about' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const navbarBg = isScrolled ? 'bg-primary/80 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'bg-transparent';
  const textColor = 'text-white';

  return (
    <header className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-700', navbarBg)}>
      <div className="container mx-auto px-4 md:px-8">
        {/* Top subtle contact info (visible on desktop) */}
        <div className={cn("hidden lg:flex justify-end items-center py-2 text-[0.6rem] font-black tracking-[0.2em] transition-all duration-700 uppercase", 
          isScrolled || !isHome ? "opacity-0 h-0 overflow-hidden py-0" : "opacity-60 text-white")}>
          <div className="flex items-center space-x-8">
            <a href="mailto:Newartourandtravel12@gmail.com" className="flex items-center hover:text-accent transition-colors">
              <Mail className="w-3 h-3 mr-2" /> Newartourandtravel12@gmail.com
            </a>
            <a href="tel:7547993621" className="flex items-center hover:text-accent transition-colors">
              <Phone className="w-3 h-3 mr-2" /> 7547993621, 8927087805
            </a>
          </div>
        </div>

        <div className={cn("flex items-center justify-between transition-all duration-700", isScrolled ? "h-16 md:h-20" : "h-20 md:h-28")}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 md:gap-4 group">
            <img
              src={logoImage}
              alt="Newar logo"
              className="h-10 w-10 md:h-12 md:w-12 object-contain"
              loading="eager"
              decoding="async"
            />
            <div className="flex flex-col items-start justify-center">
              <span className={cn("font-bold text-2xl md:text-3xl tracking-[0.3em] transition-all duration-700 uppercase relative leading-none", textColor)}>
                NEWAR
                <span className="absolute -bottom-1 left-0 w-8 h-[1px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </span>
              <span className="mt-0.5 text-lg md:text-xl font-cursive text-white/85 leading-none tracking-normal normal-case">
                Tours and Travels
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-[0.65rem] md:text-xs font-black uppercase tracking-[0.25em] hover:text-accent transition-all duration-500 relative group",
                  textColor,
                  location.pathname === link.path ? "text-accent" : ""
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-2 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-hover:w-full gold-glow",
                  location.pathname === link.path ? "w-full" : ""
                )}></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={cn("lg:hidden p-2 transition-transform active:scale-90", textColor)}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary/95 backdrop-blur-xl fixed inset-0 top-[80px] z-40 overflow-y-auto border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-12 space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-2xl font-serif tracking-wide text-white hover:text-accent transition-colors",
                    location.pathname === link.path ? "text-accent" : ""
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 border-t border-white/10 flex flex-col space-y-4">
                <a href="tel:7547993621" className="border border-accent text-accent text-center font-medium px-6 py-4 rounded-full uppercase tracking-wider text-sm flex items-center justify-center hover:bg-accent/10 transition-colors">
                  <Phone className="w-4 h-4 mr-2" /> Call Now
                </a>
                <a href="https://wa.me/917547993621" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white text-center font-medium px-6 py-4 rounded-full uppercase tracking-wider text-sm flex items-center justify-center hover:bg-[#20b958] transition-colors">
                  <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
