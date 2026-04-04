import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, ChevronLeft, ChevronRight, Shield, Award, Users, Globe } from 'lucide-react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/Image';

export function Contact() {
  // Form state for all fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [destination, setDestination] = useState('bhutan');
  const [travelers, setTravelers] = useState('solo');
  const [duration, setDuration] = useState('short');
  const [budget, setBudget] = useState('standard');
  const [message, setMessage] = useState('');

  function handleWhatsAppSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text =
      `New Contact Form Submission\n` +
      `-----------------------------\n` +
      `Name: ${firstName} ${lastName}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Destination: ${destination.charAt(0).toUpperCase() + destination.slice(1)}\n` +
      `Travelers: ${travelers.charAt(0).toUpperCase() + travelers.slice(1).replace(/([A-Z])/g, ' $1')}\n` +
      `Duration: ${duration === 'short' ? '3-5 Days' : duration === 'medium' ? '6-10 Days' : '11+ Days'}\n` +
      `Budget: ${budget === 'standard' ? 'Standard Luxury' : budget === 'premium' ? 'Premium Elite' : 'Ultra Bespoke'}\n` +
      `Additional Requests: ${message}`;

    const whatsappUrl = `https://wa.me/917547993621?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  }
  // Remove multi-step logic
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(smoothProgress, [0, 1], [1, 0]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-primary">
        {/* Background Image */}
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <motion.div
            animate={{ scale: 1.05 }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full origin-center"
          >
            <Image 
              src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&w=2500&fit=crop" 
              alt="Bhutan Landscape" 
              className="w-full h-full object-cover"
              containerClassName="w-full h-full"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          {/* Cinematic luxury gradient overlay */}
          <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#050b14]/60 to-[#050b14]/90 z-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#d4af37]/25 via-[#d4af37]/5 to-transparent z-10 pointer-events-none"></div>
        </motion.div>

        {/* Side Navigation Hints */}
        <Link to="/packages" className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center cursor-pointer hidden sm:flex group">
          <span className="text-white/60 group-hover:text-white font-bold tracking-[0.2em] text-[0.65rem] uppercase -rotate-90 mb-12 whitespace-nowrap transition-colors">Packages</span>
          <div className="w-[1px] h-16 bg-white/30 group-hover:bg-white transition-colors"></div>
        </Link>

        <Link to="/" className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center cursor-pointer hidden sm:flex group">
          <div className="w-[1px] h-16 bg-white/30 group-hover:bg-white transition-colors mb-12"></div>
          <span className="text-white/60 group-hover:text-white font-bold tracking-[0.2em] text-[0.65rem] uppercase rotate-90 whitespace-nowrap transition-colors">Home</span>
        </Link>

        {/* Main Typography */}
        <div className="relative z-20 text-center flex flex-col items-center mt-10 md:mt-0 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-cursive text-5xl md:text-7xl lg:text-8xl text-white/95 -mb-6 md:-mb-10 z-20"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)' }}
          >
            Get in Touch
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="font-bold text-[4rem] sm:text-[6rem] md:text-[9rem] lg:text-[12rem] text-white leading-none tracking-tighter z-10 uppercase"
            style={{ textShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
          >
            CONTACT
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-white/80 font-sub text-lg md:text-xl max-w-2xl mt-8 z-20 leading-relaxed"
          >
            Ready to plan your Himalayan adventure? Contact us today and let our experts craft the perfect itinerary across Bhutan, Sikkim, Darjeeling, and Meghalaya.
          </motion.p>
        </div>

        {/* Pagination indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-10 md:bottom-16 z-20 flex items-center space-x-6 text-white/60 text-xs font-bold tracking-widest"
        >
          <span className="text-white flex items-center">
            CONTACT <span className="w-8 h-[2px] bg-white ml-4"></span>
          </span>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-noise pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-[150px] rounded-full translate-x-1/2 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div>
                <span className="font-cursive text-4xl text-accent mb-4 block">Connect</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 uppercase tracking-tight">Our Offices</h2>
                <div className="w-20 h-[2px] bg-accent mb-8"></div>
                <p className="text-gray-400 font-sub text-lg leading-relaxed">We are here to answer any questions you may have about traveling to Bhutan. Reach out to us and we'll respond as soon as we can.</p>
              </div>

              <div className="space-y-10">
                <div className="flex items-start group">
                  <div className="w-14 h-14 glass rounded-full flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-primary transition-all duration-500 gold-glow">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="ml-8">
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/60 mb-2">Our Office</h4>
                    <p className="text-white font-sub text-lg leading-relaxed">KB Pradhan Plaza, NS Road,<br />Jaigaon, West Bengal, India</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 glass rounded-full flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-primary transition-all duration-500 gold-glow">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="ml-8">
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/60 mb-2">Phone</h4>
                    <div className="flex flex-col space-y-2">
                      <a href="tel:+917547993621" className="text-white font-sub text-lg hover:text-accent transition-colors">+91 7547993621</a>
                      <a href="tel:+918927087805" className="text-white font-sub text-lg hover:text-accent transition-colors">+91 8927087805</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 glass rounded-full flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-primary transition-all duration-500 gold-glow">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="ml-8">
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/60 mb-2">Email</h4>
                    <a href="mailto:info@newartravels.com" className="text-white font-sub text-lg hover:text-accent transition-colors">info@newartravels.com</a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 glass rounded-full flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-primary transition-all duration-500 gold-glow">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="ml-8">
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/60 mb-2">Business Hours</h4>
                    <p className="text-white font-sub text-lg leading-relaxed">Monday - Saturday: 9:00 AM - 6:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card p-10 md:p-16 rounded-sm border border-white/10 relative overflow-hidden gold-glow"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>
              
              <div className="flex justify-between items-center mb-10">
                <div>
                  <span className="font-cursive text-3xl text-accent mb-2 block">Trip Designer</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">Tailor Your Journey</h3>
                </div>
              </div>
              
              <form className="space-y-8" onSubmit={handleWhatsAppSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-white/60 ml-1">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors font-sub"
                      placeholder="John"
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-white/60 ml-1">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors font-sub"
                      placeholder="Doe"
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-white/60 ml-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors font-sub"
                    placeholder="john@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-white/60 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors font-sub"
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="destination" className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-white/60 ml-1">Destination</label>
                    <select
                      id="destination"
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors font-sub appearance-none"
                      value={destination}
                      onChange={e => setDestination(e.target.value)}
                    >
                      <option value="bhutan" className="bg-primary">Bhutan</option>
                      <option value="sikkim" className="bg-primary">Sikkim</option>
                      <option value="darjeeling" className="bg-primary">Darjeeling</option>
                      <option value="meghalaya" className="bg-primary">Meghalaya</option>
                      <option value="multi" className="bg-primary">Multi-Destination</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="travelers" className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-white/60 ml-1">Travelers</label>
                    <select
                      id="travelers"
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors font-sub appearance-none"
                      value={travelers}
                      onChange={e => setTravelers(e.target.value)}
                    >
                      <option value="solo" className="bg-primary">Solo Traveler</option>
                      <option value="couple" className="bg-primary">Couple</option>
                      <option value="family" className="bg-primary">Family</option>
                      <option value="group" className="bg-primary">Small Group</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="duration" className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-white/60 ml-1">Duration</label>
                    <select
                      id="duration"
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors font-sub appearance-none"
                      value={duration}
                      onChange={e => setDuration(e.target.value)}
                    >
                      <option value="short" className="bg-primary">3-5 Days</option>
                      <option value="medium" className="bg-primary">6-10 Days</option>
                      <option value="long" className="bg-primary">11+ Days</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-white/60 ml-1">Budget Range</label>
                    <select
                      id="budget"
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors font-sub appearance-none"
                      value={budget}
                      onChange={e => setBudget(e.target.value)}
                    >
                      <option value="standard" className="bg-primary">Standard Luxury</option>
                      <option value="premium" className="bg-primary">Premium Elite</option>
                      <option value="ultra" className="bg-primary">Ultra Bespoke</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-white/60 ml-1">Additional Requests</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors font-sub resize-none"
                    placeholder="Tell us about any specific interests, dietary requirements, or special occasions..."
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-gold text-primary font-bold uppercase tracking-[0.2em] py-5 rounded-sm flex items-center justify-center group transition-all duration-500 gold-glow"
                >
                  Submit Design <Send className="w-5 h-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Trust & Authority Section */}
      <section className="py-32 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-noise pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 glass rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-500 gold-glow">
                <Shield className="w-8 h-8" />
              </div>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Secure Booking</h4>
              <p className="text-gray-500 text-xs font-sub">100% safe and encrypted transactions for your peace of mind.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 glass rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-500 gold-glow">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Certified Experts</h4>
              <p className="text-gray-500 text-xs font-sub">Licensed by the Tourism Council of Bhutan and IATA member.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 glass rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-500 gold-glow">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Local Guides</h4>
              <p className="text-gray-500 text-xs font-sub">Native experts who know the hidden gems of the Himalayas.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 glass rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-500 gold-glow">
                <Globe className="w-8 h-8" />
              </div>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Sustainable Travel</h4>
              <p className="text-gray-500 text-xs font-sub">Committed to preserving the environment and local culture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full relative grayscale hover:grayscale-0 transition-all duration-1000">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.123456789!2d89.38123456789!3d26.84123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e3cb123456789%3A0x123456789abcdef!2sJaigaon%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
          className="w-full h-full border-0" 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        ></iframe>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-primary via-transparent to-primary/30"></div>
      </section>
    </div>
  );
}
