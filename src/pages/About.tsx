import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { Image } from '@/components/ui/Image';
import { Seo, seoSiteUrl } from '@/components/seo/Seo';
import a1Image from '../../Images/a1.png';
import a2Image from '../../Images/a2.png';
import andyImage from '../../Images/andy.png';

export function About() {
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

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Newartourandtravels',
    url: `${seoSiteUrl}/about`,
    description: 'Learn about Newartourandtravels, a Jaigaon-based team specializing in Bhutan tour and travel experiences.'
  };

  return (
    <div className="w-full">
      <Seo
        title="About Newartourandtravels | Jaigaon Tour and Travels"
        description="Know the team behind Newartourandtravels in Jaigaon and how we design reliable Bhutan and Himalayan travel experiences."
        path="/about"
        keywords="about newartourandtravels, jaigaon tour and travels company, bhutan travel experts jaigaon"
        schema={schema}
      />
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
              src="https://images.pexels.com/photos/325807/pexels-photo-325807.jpeg?auto=compress&w=1920&fit=crop" 
              alt="Darjeeling Tea Gardens" 
              className="w-full h-full object-cover"
              containerClassName="w-full h-full"
              
            />
          </motion.div>
          {/* Cinematic luxury gradient overlay */}
          <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#050b14]/60 to-[#050b14]/90 z-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#d4af37]/25 via-[#d4af37]/5 to-transparent z-10 pointer-events-none"></div>
        </motion.div>

        {/* Side Navigation Hints */}
        <Link to="/" className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center cursor-pointer hidden sm:flex group">
          <span className="text-white/60 group-hover:text-white font-bold tracking-[0.2em] text-[0.65rem] uppercase -rotate-90 mb-12 whitespace-nowrap transition-colors">Home</span>
          <div className="w-[1px] h-16 bg-white/30 group-hover:bg-white transition-colors"></div>
        </Link>

        <Link to="/destinations" className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center cursor-pointer hidden sm:flex group">
          <div className="w-[1px] h-16 bg-white/30 group-hover:bg-white transition-colors mb-12"></div>
          <span className="text-white/60 group-hover:text-white font-bold tracking-[0.2em] text-[0.65rem] uppercase rotate-90 whitespace-nowrap transition-colors">Destinations</span>
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
            Our Story
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="font-bold text-[4rem] sm:text-[6rem] md:text-[9rem] lg:text-[12rem] text-white leading-none tracking-tighter z-10 uppercase"
            style={{ textShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
          >
            ABOUT US
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-white/80 font-sub text-lg md:text-xl max-w-2xl mt-8 z-20 leading-relaxed"
          >
            Crafting unforgettable journeys across the Himalayas with passion, expertise, and a commitment to luxury.
          </motion.p>
        </div>

        {/* Pagination indicator (static for other pages) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-10 md:bottom-16 z-20 flex items-center space-x-6 text-white/60 text-xs font-bold tracking-widest"
        >
          <span className="text-white flex items-center">
            ABOUT <span className="w-8 h-[2px] bg-white ml-4"></span>
          </span>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-32 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-noise pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-1/2 h-full bg-accent/5 blur-[120px] rounded-full -translate-x-1/2 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-cursive text-4xl text-accent mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 uppercase tracking-tight">Welcome to Newartourandtravels</h2>
              <div className="w-20 h-[2px] bg-accent mb-8"></div>
              <p className="text-gray-400 font-sub leading-relaxed mb-6 text-lg">
                Welcome to Newartourandtravels, your trusted Jaigaon tour and travels partner in exploring the majestic eastern frontier. From the high-altitude serenity of Sikkim to the cloud-kissed hills of Meghalaya, we bring you the very best of India's Northeast and the mystical Kingdom of Bhutan.
              </p>
              <h3 className="text-white font-bold mb-4 text-2xl">Our Destinations:</h3>
              <p className="text-gray-400 font-sub leading-relaxed mb-3 text-lg">
                Bhutan: Experience the land of Gross National Happiness.
              </p>
              <p className="text-gray-400 font-sub leading-relaxed text-lg">
                Sikkim & Darjeeling: Traverse the legendary Himalayan loops and colonial highlands.
              </p>
              <p className="text-gray-400 font-sub leading-relaxed mb-6 text-lg">
                Meghalaya: Step into the wettest, greenest, and most magical landscapes on Earth.
              </p>
              <p className="text-gray-400 font-sub leading-relaxed text-lg">
                As a Bhutan tour and travels team based in Jaigaon, we handle planning and logistics so you can focus on memories.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="luxury-border rounded-sm overflow-hidden group">
                    <Image 
                      src={a1Image}
                      alt="Darjeeling Tea Gardens" 
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                      containerClassName="w-full h-80"
                      
                    />
                  </div>
                  <div className="glass p-6 rounded-sm border-l-2 border-accent gold-glow">
                    <p className="text-white font-serif italic text-lg">"The mountains are calling and I must go."</p>
                  </div>
                </div>
                <div className="pt-12">
                  <div className="luxury-border rounded-sm overflow-hidden group">
                    <Image 
                      src={a2Image}
                      alt="Tiger's Nest Monastery Bhutan" 
                      className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                      containerClassName="w-full h-[400px]"
                      
                    />
                  </div>
                </div>
              </div>
              {/* Decorative gold element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-accent/30 pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-noise pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="luxury-border rounded-sm overflow-hidden group aspect-[4/5] max-w-md mx-auto">
                <Image 
                  src={andyImage}
                  alt="Bhutanese Person Culture" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                  containerClassName="w-full h-full"
                  
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-10 left-10 right-10 text-center">
                  <h3 className="text-3xl font-bold text-white uppercase tracking-tighter mb-2">Andy</h3>
                  <p className="text-accent font-cursive text-2xl">Roshan Pradhan</p>
                </div>
              </div>
              {/* Decorative gold element */}
              <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-accent/30 pointer-events-none"></div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-cursive text-4xl text-accent mb-4 block">Leadership</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 uppercase tracking-tight">Meet Our Founder</h2>
              <div className="w-20 h-[2px] bg-accent mb-8"></div>
              <p className="text-gray-400 font-sub leading-relaxed mb-6 text-lg italic">
                "Travel is not just about seeing new places; it's about seeing the world with new eyes. At Newartourandtravels, we don't just sell tours; we craft life-changing experiences that stay with you forever."
              </p>
              <p className="text-gray-400 font-sub leading-relaxed mb-8 text-lg">
                Hi, I’m Andy — your travel partner and host. I specialize in creating seamless and memorable journeys. If you have any questions or need assistance, feel free to reach out anytime.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-noise pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 uppercase tracking-tighter leading-none">Ready to Begin Your <span className="text-accent italic font-cursive normal-case tracking-normal">Himalayan</span> Story?</h2>
            <p className="text-gray-400 font-sub text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Let us help you design a journey that reflects your personal style and travel dreams.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="bg-gradient-gold text-primary px-12 py-5 rounded-sm font-bold uppercase tracking-[0.25em] text-xs gold-glow gold-glow-hover hover:scale-105 transition-all duration-500">
                Design My Trip
              </Link>
              <Link to="/packages" className="glass text-white px-12 py-5 rounded-sm font-bold uppercase tracking-[0.25em] text-xs hover:bg-white/10 transition-all duration-500 border border-white/10">
                Explore Packages
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
