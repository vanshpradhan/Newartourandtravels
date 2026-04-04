import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Shield, Star, Heart, CheckCircle, Award, Users, Instagram, ChevronLeft, ChevronRight, Search, Briefcase, Activity, DollarSign } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { Image } from '@/components/ui/Image';

const heroSlides = [
  {
    id: '01',
    title: 'BHUTAN',
    subtitle: 'Explore Beautiful',
    image: 'https://images.pexels.com/photos/35402324/pexels-photo-35402324.jpeg?auto=compress&w=2500&fit=crop',
    prevHint: 'Meghalaya',
    nextHint: 'Sikkim'
  },
  {
    id: '02',
    title: 'SIKKIM',
    subtitle: 'Discover Mystic',
    image: 'https://images.pexels.com/photos/17332516/pexels-photo-17332516.jpeg?auto=compress&w=2500&fit=crop',
    prevHint: 'Bhutan',
    nextHint: 'Darjeeling'
  },
  {
    id: '03',
    title: 'DARJEELING',
    subtitle: 'Experience Scenic',
    image: 'https://images.pexels.com/photos/33263641/pexels-photo-33263641.jpeg?auto=compress&w=2500&fit=crop',
    prevHint: 'Sikkim',
    nextHint: 'Meghalaya'
  },
  {
    id: '04',
    title: 'MEGHALAYA',
    subtitle: 'Witness Magical',
    image: 'https://images.pexels.com/photos/19469036/pexels-photo-19469036.jpeg?auto=compress&w=2500&fit=crop',
    prevHint: 'Darjeeling',
    nextHint: 'Bhutan'
  }
];

const destinations = [
  { name: 'Tiger Nest Monastery', image: 'https://images.pexels.com/photos/35402324/pexels-photo-35402324.jpeg?auto=compress&w=600&fit=crop' },
  { name: 'Punakha Dzong', image: 'https://images.pexels.com/photos/9982525/pexels-photo-9982525.jpeg?auto=compress&w=600&fit=crop' },
  { name: 'Tsomgo Lake', image: 'https://images.pexels.com/photos/10477351/pexels-photo-10477351.jpeg?auto=compress&w=600&fit=crop' },
  { name: 'Tiger Hill', image: 'https://images.pexels.com/photos/33263641/pexels-photo-33263641.jpeg?auto=compress&w=600&fit=crop' },
  { name: 'Root Bridge', image: 'https://images.pexels.com/photos/34017584/pexels-photo-34017584.jpeg?auto=compress&w=600&fit=crop' },
];

const packages = [
  { title: 'Bhutan Express Getaway', duration: '2N/3D', image: 'https://images.pexels.com/photos/35402324/pexels-photo-35402324.jpeg?auto=compress&w=600&fit=crop', category: 'Bhutan' },
  { title: 'Sikkim Himalayan Escape', duration: '4N/5D', image: 'https://images.pexels.com/photos/17332516/pexels-photo-17332516.jpeg?auto=compress&w=600&fit=crop', category: 'Sikkim' },
  { title: 'Darjeeling Tea Valley Retreat', duration: '3N/4D', image: 'https://images.pexels.com/photos/33263641/pexels-photo-33263641.jpeg?auto=compress&w=600&fit=crop', category: 'Darjeeling' },
  { title: 'Meghalaya Waterfall Wonders', duration: '4N/5D', image: 'https://images.pexels.com/photos/19469036/pexels-photo-19469036.jpeg?auto=compress&w=600&fit=crop', category: 'Meghalaya' },
];

const testimonials = [
  { name: 'Sarah Jenkins', location: 'United Kingdom', text: 'An absolutely magical experience. The attention to detail and the luxury accommodations provided by NEWAR made our Bhutan trip unforgettable.', rating: 5 },
  { name: 'Michael Chen', location: 'Singapore', text: 'From the moment we landed in Paro, everything was seamless. Our guide was incredibly knowledgeable and the itinerary was perfectly paced.', rating: 5 },
  { name: 'Elena Rodriguez', location: 'Spain', text: 'The Sikkim and Darjeeling tour exceeded all expectations. Waking up to the view of Kanchenjunga from our premium suite was a dream come true.', rating: 5 },
];

const instagramPosts = [
  { id: 1, image: 'https://images.pexels.com/photos/19469036/pexels-photo-19469036.jpeg?auto=compress&w=400&fit=crop', link: 'https://instagram.com' },
  { id: 2, image: 'https://images.pexels.com/photos/9982525/pexels-photo-9982525.jpeg?auto=compress&w=400&fit=crop', link: 'https://instagram.com' },
  { id: 3, image: 'https://images.pexels.com/photos/35402324/pexels-photo-35402324.jpeg?auto=compress&w=400&fit=crop', link: 'https://instagram.com' },
  { id: 4, image: 'https://images.pexels.com/photos/33296797/pexels-photo-33296797.jpeg?auto=compress&w=400&fit=crop', link: 'https://instagram.com' },
  { id: 5, image: 'https://images.pexels.com/photos/34017584/pexels-photo-34017584.jpeg?auto=compress&w=400&fit=crop', link: 'https://instagram.com' },
];

const travelStories = [
  {
    title: 'The Silent Monasteries of Bhutan',
    category: 'Culture',
    image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&w=600&fit=crop',
    excerpt: 'Discover the spiritual heart of the Himalayas through the ancient traditions of Bhutanese monastic life.',
    date: 'March 15, 2024'
  },
  {
    title: 'Chasing Waterfalls in Meghalaya',
    category: 'Adventure',
    image: 'https://images.pexels.com/photos/19469036/pexels-photo-19469036.jpeg?auto=compress&w=600&fit=crop',
    excerpt: 'A journey through the wettest place on earth, where clouds touch the ground and waterfalls roar.',
    date: 'February 28, 2024'
  },
  {
    title: 'Sikkim: A Hiker\'s Paradise',
    category: 'Nature',
      image: 'https://images.pexels.com/photos/325807/pexels-photo-325807.jpeg?auto=compress&w=600&fit=crop',
    excerpt: 'Exploring the pristine trails and snow-capped peaks of North Sikkim\'s hidden valleys.',
    date: 'January 12, 2024'
  }
];

export function Home() {
  const heroRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Apply a spring for smoother, velocity-responsive parallax
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // More subtle parallax movement
  const y = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(smoothProgress, [0, 1], [1, 0]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-primary">
        {/* Background Image */}
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1.05 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full origin-center absolute inset-0"
            >
              <Image 
                src={heroSlides[currentSlide].image} 
                alt={heroSlides[currentSlide].title} 
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </AnimatePresence>
          {/* Cinematic luxury gradient overlay */}
          <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#050b14]/60 to-[#050b14]/90 z-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#d4af37]/25 via-[#d4af37]/5 to-transparent z-10 pointer-events-none"></div>
        </motion.div>
        
        {/* Side Navigation Hints */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.6, x: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          onClick={prevSlide}
          className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center cursor-pointer hidden sm:flex"
        >
          <span className="text-white/80 font-bold tracking-[0.2em] text-[0.65rem] uppercase -rotate-90 mb-12 whitespace-nowrap">{heroSlides[currentSlide].prevHint}</span>
          <div className="w-[1px] h-16 bg-white/30"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.6, x: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          onClick={nextSlide}
          className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center cursor-pointer hidden sm:flex"
        >
          <div className="w-[1px] h-16 bg-white/30 mb-12"></div>
          <span className="text-white/80 font-bold tracking-[0.2em] text-[0.65rem] uppercase rotate-90 whitespace-nowrap">{heroSlides[currentSlide].nextHint}</span>
        </motion.div>

        {/* Main Typography */}
        <div className="relative z-20 text-center flex flex-col items-center mt-10 md:mt-0 px-4">
          <AnimatePresence mode="wait">
            <motion.h2 
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="font-cursive text-5xl md:text-7xl lg:text-8xl text-white/95 -mb-6 md:-mb-10 z-20"
              style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)' }}
            >
              {heroSlides[currentSlide].subtitle}
            </motion.h2>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.h1 
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-bold text-[4rem] sm:text-[6rem] md:text-[9rem] lg:text-[12rem] text-white leading-none tracking-tighter z-10 uppercase"
              style={{ textShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
            >
              {heroSlides[currentSlide].title}
            </motion.h1>
          </AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-8 md:mt-12 z-20"
          >
            <Link to="/packages" className="inline-flex items-center justify-center px-8 py-4 border border-white/50 text-white hover:bg-white hover:text-primary transition-all duration-500 tracking-[0.2em] uppercase text-xs font-bold backdrop-blur-sm">
              Discover More
            </Link>
          </motion.div>
        </div>

        {/* Pagination */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-10 md:bottom-16 z-20 flex items-center space-x-6 text-white/60 text-xs font-bold tracking-widest"
        >
          {heroSlides.map((slide, index) => (
            <span 
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
              className={`cursor-pointer transition-colors flex items-center ${currentSlide === index ? 'text-white' : 'hover:text-white'}`}
            >
              {slide.id} {currentSlide === index && <span className="w-8 h-[2px] bg-white ml-4"></span>}
            </span>
          ))}
        </motion.div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-secondary border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-4 group"
            >
              <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                <Shield className="w-6 h-6" />
              </div>
              <span className="text-white/80 font-sub text-lg tracking-wide">Safe Travels</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center space-x-4 group"
            >
              <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-white/80 font-sub text-lg tracking-wide">Premium Quality</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-4 group"
            >
              <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-white/80 font-sub text-lg tracking-wide">Expert Guides</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center space-x-4 group"
            >
              <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                <CheckCircle className="w-6 h-6" />
              </div>
              <span className="text-white/80 font-sub text-lg tracking-wide">100% Tailored</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-noise pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-[120px] rounded-full translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent/5 blur-[100px] rounded-full -translate-x-1/2 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <span className="font-cursive text-4xl text-accent mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 leading-tight uppercase tracking-tight">Discover the Magic of the Himalayas</h2>
              <div className="w-20 h-[2px] bg-accent mb-10"></div>
              <p className="text-gray-300 font-sub text-xl leading-relaxed mb-8 italic">
                "At NEWAR, we believe in creating journeys that touch your soul. Based in Jaigaon, the gateway to Bhutan, we specialize in crafting premium, personalized travel experiences."
              </p>
              <p className="text-gray-400 font-sub text-lg leading-relaxed mb-12">
                Whether you seek spiritual awakening at ancient monasteries, thrilling adventures in the Himalayas, or a peaceful retreat in pristine valleys, our expert team ensures every moment of your trip is seamless, luxurious, and extraordinary.
              </p>
              <Link to="/about" className="inline-flex items-center text-accent font-bold hover:text-accent-light transition-colors uppercase tracking-[0.2em] text-xs group">
                Explore Our Legacy <ArrowRight className="ml-4 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl border border-white/10 relative group luxury-border">
                <Image 
                  src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&w=1000&fit=crop" 
                  alt="Himalayan Culture" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                  containerClassName="w-full h-full"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="absolute -bottom-12 -left-12 glass p-12 rounded-sm border border-white/10 hidden md:block gold-glow">
                <div className="text-6xl font-bold text-gradient-gold mb-2">10+</div>
                <div className="text-[0.65rem] uppercase tracking-[0.3em] text-white/60 font-black">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-32 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-noise pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/[0.03] blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <span className="font-cursive text-4xl text-accent mb-4 block">Iconic Places</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 uppercase tracking-tight">Popular Destinations</h2>
            <div className="w-24 h-[2px] bg-accent mx-auto mb-8"></div>
            <p className="text-gray-400 font-sub text-xl max-w-2xl mx-auto">Explore the most breathtaking and spiritually significant locations across the Himalayas.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((dest, index) => (
              <motion.div 
                key={dest.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[3/4] shadow-2xl border border-white/5"
              >
                <Image 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  containerClassName="w-full h-full"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-serif text-white mb-3">{dest.name}</h3>
                  <Link to="/destinations" className="inline-flex items-center text-accent text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    Explore <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/destinations" className="inline-block glass hover:bg-white/10 text-white px-10 py-4 rounded-full uppercase tracking-[0.15em] text-sm font-medium transition-all duration-300">
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium mb-4 block">Our Promise</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">Why Choose Us</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-accent backdrop-blur-sm">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Premium Experience</h3>
              <p className="text-white/70 font-sub leading-relaxed">We curate luxury stays and comfortable travel arrangements to ensure your journey is as beautiful as the destination.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-accent backdrop-blur-sm">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Local Expertise</h3>
              <p className="text-white/70 font-sub leading-relaxed">Our deep-rooted knowledge allows us to offer authentic experiences and hidden gems off the beaten path.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-accent backdrop-blur-sm">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Hassle-Free Travel</h3>
              <p className="text-white/70 font-sub leading-relaxed">From visas to permits and itineraries, we handle all the details so you can focus on enjoying your trip.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-32 bg-secondary relative">
        <div className="absolute inset-0 bg-noise pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="max-w-2xl">
              <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium mb-4 block">Curated Journeys</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white">Featured Packages</h2>
            </div>
            <Link to="/packages" className="hidden md:inline-flex items-center text-accent hover:text-accent-light transition-colors uppercase tracking-[0.15em] text-sm font-medium group">
              View All Packages <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {packages.map((pkg, index) => (
              <motion.div 
                key={pkg.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden group flex flex-col"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    containerClassName="w-full h-full"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  <div className="absolute top-6 left-6 glass px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white rounded-full">
                    {pkg.category}
                  </div>
                  <div className="absolute top-6 right-6 bg-gradient-gold px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary rounded-full shadow-sm">
                    {pkg.duration}
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-accent transition-colors">{pkg.title}</h3>
                  <p className="text-gray-400 font-sub text-sm mb-8 line-clamp-2 flex-grow">Experience the best of the Himalayas with our carefully crafted itinerary designed for maximum comfort and discovery.</p>
                  <Link to="/packages" className="inline-block glass hover:bg-white/10 text-white px-8 py-3.5 rounded-full uppercase tracking-[0.15em] text-xs font-medium transition-all duration-300 w-full text-center">
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center md:hidden">
            <Link to="/packages" className="inline-flex items-center text-accent hover:text-accent-light transition-colors uppercase tracking-[0.15em] text-sm font-medium">
              View All Packages <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-primary border-t border-white/5 relative">
        <div className="absolute inset-0 bg-noise pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium mb-4 block">Guest Experiences</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">What Our Clients Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass-card glass-card-hover p-10 rounded-2xl relative"
              >
                <div className="text-accent mb-6 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 font-sub italic leading-relaxed mb-8">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-serif text-white text-lg">{testimonial.name}</h4>
                  <p className="text-xs uppercase tracking-wider text-gray-500 mt-1">{testimonial.location}</p>
                </div>
                <div className="absolute top-10 right-10 text-white/5">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L16.411 14.182C16.411 14.182 15.011 14.182 15.011 11.455C15.011 8.727 17.511 7.364 19.511 7.364C21.511 7.364 23.011 8.727 23.011 11.455C23.011 14.182 20.511 21 20.511 21H14.017ZM3.017 21L5.411 14.182C5.411 14.182 4.011 14.182 4.011 11.455C4.011 8.727 6.511 7.364 8.511 7.364C10.511 7.364 12.011 8.727 12.011 11.455C12.011 14.182 9.511 21 9.511 21H3.017Z" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Stories Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-noise pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="max-w-2xl">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-accent uppercase tracking-[0.3em] text-[0.65rem] font-black mb-4 block"
              >
                Editorial
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl font-serif text-white leading-none tracking-tighter uppercase"
              >
                Travel <span className="text-accent italic font-cursive normal-case tracking-normal">Stories</span>
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 md:mt-0"
            >
              <Link to="/about" className="text-white/60 hover:text-accent transition-colors uppercase tracking-[0.2em] text-[0.65rem] font-black flex items-center group">
                View All Stories <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {travelStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-8 luxury-border">
                  <Image 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                    containerClassName="w-full h-full"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                  <div className="absolute top-6 left-6 glass px-4 py-2 text-[0.6rem] font-black uppercase tracking-[0.25em] text-accent rounded-sm border border-accent/20">
                    {story.category}
                  </div>
                </div>
                <div className="space-y-4">
                  <span className="text-gray-500 text-[0.6rem] font-black uppercase tracking-[0.2em]">{story.date}</span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300 uppercase tracking-tight leading-tight">{story.title}</h3>
                  <p className="text-gray-400 font-sub text-sm leading-relaxed line-clamp-2">{story.excerpt}</p>
                  <div className="pt-4 flex items-center text-accent text-[0.6rem] font-black uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform duration-300">
                    Read Story <ArrowRight className="ml-2 w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-24 bg-secondary text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-noise pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 mb-12 flex flex-col md:flex-row justify-between items-end relative z-10">
          <div>
            <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium mb-4 block flex items-center">
              <Instagram className="w-4 h-4 mr-2" /> Follow Us
            </span>
            <h2 className="text-4xl md:text-5xl font-serif">@newartourandtravels</h2>
          </div>
          <a href="https://www.instagram.com/newartourandtravels" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center text-white hover:text-accent transition-colors uppercase tracking-[0.15em] text-sm font-medium group mt-6 md:mt-0">
            View Instagram <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
        
        {/* Scrolling Feed */}
        <div className="relative w-full overflow-hidden flex">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
            className="flex space-x-4 px-4"
            style={{ width: "fit-content" }}
          >
            {[...instagramPosts, ...instagramPosts].map((post, index) => (
              <a 
                key={`${post.id}-${index}`} 
                href={post.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative w-64 md:w-80 aspect-square flex-shrink-0 group overflow-hidden rounded-sm block"
              >
                  <Image 
                    src={post.image} 
                    alt="Instagram post" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    containerClassName="w-full h-full"
                    referrerPolicy="no-referrer"
                  />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
              </a>
            ))}
          </motion.div>
        </div>
        
        <div className="container mx-auto px-4 mt-12 text-center md:hidden">
          <a href="https://www.instagram.com/newartourandtravels" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-white hover:text-accent transition-colors uppercase tracking-[0.15em] text-sm font-medium">
            View Instagram <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
