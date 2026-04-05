import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import { Clock, MapPin, Check, X, Search, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/Image';
import { Seo, seoSiteUrl } from '@/components/seo/Seo';
import a1Image from '../../Images/a1.png';
import a2Image from '../../Images/a2.png';
import a3Image from '../../Images/a3.png';
import a4Image from '../../Images/a4.png';
import a5Image from '../../Images/a5.png';
import a6Image from '../../Images/a6.png';
import a7Image from '../../Images/a7.png';
import a8Image from '../../Images/a8.png';
import a9Image from '../../Images/a9.png';
import b1Image from '../../Images/b1.png';
import b2Image from '../../Images/b2.png';
import c1Image from '../../Images/c1.png';
import c2Image from '../../Images/c2.png';
import d1Image from '../../Images/d1.png';
import d2Image from '../../Images/d2.png';

const packages = [
  // Bhutan
  {
    id: 'express-getaway',
    title: 'Bhutan Express Getaway',
    duration: '2N/3D',
    category: 'Bhutan',
    image: a1Image,
    description: 'A quick yet immersive introduction to the Land of the Thunder Dragon, covering the highlights of Paro and Thimphu.',
    highlights: ['Paro Taktsang hike', 'Thimphu local sightseeing', 'Traditional Bhutanese dinner'],
    itinerary: [
      { day: 1, title: 'Arrival in Paro & Transfer to Thimphu', description: 'Meet our representative at the airport and drive to Thimphu. Visit the Buddha Dordenma and Memorial Chorten in the evening.' },
      { day: 2, title: 'Thimphu Exploration & Drive to Paro', description: 'Explore Thimphu\'s cultural sites including the Textile Museum and Folk Heritage Museum before driving back to Paro.' },
      { day: 3, title: 'The Tiger\'s Nest Hike', description: 'Embark on the legendary hike to Paro Taktsang (Tiger\'s Nest), perched on a cliffside 900m above the valley floor.' }
    ],
    inclusions: ['Luxury Accommodation', 'Private Guide', 'All Meals', 'Internal Transfers', 'Visa Fees'],
    exclusions: ['International Flights', 'Travel Insurance', 'Personal Expenses']
  },
  {
    id: 'himalayan-bliss',
    title: 'Himalayan Bliss Short Tour',
    duration: '3N/4D',
    category: 'Bhutan',
    image: a2Image,
    description: 'Experience the perfect blend of culture and nature in this short tour covering Paro, Thimphu, and the beautiful Dochula Pass.',
    highlights: ['Dochula Pass views', 'Buddha Dordenma', 'Punakha Dzong visit']
  },
  {
    id: 'mystical-retreat',
    title: 'Mystical Bhutan Retreat',
    duration: '4N/5D',
    category: 'Bhutan',
    image: a3Image,
    description: 'Delve deeper into Bhutan\'s mystical charm with visits to ancient monasteries, lush valleys, and vibrant local markets.',
    highlights: ['Tiger Nest Monastery', 'Punakha Suspension Bridge', 'Chimi Lhakhang']
  },
  {
    id: 'cultural-explorer',
    title: 'Bhutan Cultural Explorer',
    duration: '5N/6D',
    category: 'Bhutan',
    image: a4Image,
    description: 'An extensive journey exploring the rich cultural heritage, traditional arts, and majestic architecture of western Bhutan.',
    highlights: ['Textile Museum', 'Traditional paper factory', 'Folk Heritage Museum']
  },
  {
    id: 'enchanting-escape',
    title: 'Enchanting Bhutan Escape',
    duration: '6N/7D',
    category: 'Bhutan',
    image: a5Image,
    description: 'A comprehensive tour that takes you through the scenic valleys of Paro, Thimphu, Punakha, and the beautiful Phobjikha valley.',
    highlights: ['Phobjikha Valley', 'Black-necked crane center', 'Gangtey Monastery']
  },
  {
    id: 'adventure-nature',
    title: 'Bhutan Adventure & Nature Trail',
    duration: '6N/7D',
    category: 'Bhutan',
    image: a6Image,
    description: 'For the active traveler, this package includes day hikes, nature walks, and exploration of Bhutan\'s pristine environment.',
    highlights: ['Chele La Pass hike', 'Nature trails', 'Camping options']
  },
  {
    id: 'ultimate-experience',
    title: 'Ultimate Bhutan Experience',
    duration: '7N/8D',
    category: 'Bhutan',
    image: a7Image,
    description: 'The definitive Bhutan journey covering all major western and central valleys, offering a complete cultural and natural immersion.',
    highlights: ['Bumthang Valley', 'Trongsa Dzong', 'Comprehensive cultural tour']
  },
  {
    id: 'romantic-honeymoon',
    title: 'Romantic Bhutan Honeymoon Tour',
    duration: '4N/5D',
    category: 'Bhutan',
    image: a8Image,
    description: 'A specially curated romantic getaway featuring luxury stays, private dinners, and peaceful moments in serene landscapes.',
    highlights: ['Luxury accommodations', 'Private blessings', 'Couples spa treatment']
  },
  {
    id: 'family-delight',
    title: 'Bhutan Family Delight Tour',
    duration: '5N/6D',
    category: 'Bhutan',
    image: a9Image,
    description: 'A family-friendly itinerary balancing cultural sights with engaging activities suitable for all age groups.',
    highlights: ['Archery lessons', 'Farmhouse visit', 'Easy nature walks']
  },
  // Sikkim (Includes Darjeeling & Meghalaya)
  {
    id: 'sikkim-escape',
    title: 'Sikkim Himalayan Escape',
    duration: '4N/5D',
    category: 'Sikkim',
    image: b1Image,
    description: 'Experience the pristine beauty of Sikkim with snow-capped mountains, peaceful monasteries, and the charm of Gangtok and surrounding valleys.',
    highlights: ['Gangtok local sightseeing', 'Rumtek Monastery', 'Himalayan views']
  },
  {
    id: 'enchanting-sikkim',
    title: 'Enchanting Sikkim Journey',
    duration: '5N/6D',
    category: 'Sikkim',
    image: b2Image,
    description: 'Explore the magical landscapes of Sikkim, from serene lakes like Tsomgo to vibrant culture, offering a perfect mix of nature and tradition.',
    highlights: ['Tsomgo Lake visit', 'Local cultural experience', 'Baba Mandir']
  },
  {
    id: 'darjeeling-tea',
    title: 'Darjeeling Tea Valley Retreat',
    duration: '3N/4D',
    category: 'Darjeeling',
    image: c1Image,
    description: 'Relax amidst lush tea gardens, enjoy breathtaking sunrise views from Tiger Hill, and soak in the colonial charm of Darjeeling.',
    highlights: ['Tiger Hill sunrise', 'Batasia Loop', 'Happy Valley Tea Estate']
  },
  {
    id: 'darjeeling-bliss',
    title: 'Darjeeling Scenic Bliss Tour',
    duration: '4N/5D',
    category: 'Darjeeling',
    image: c2Image,
    description: 'Discover misty hills, toy train rides, and panoramic Himalayan views in this peaceful getaway to the Queen of the Hills.',
    highlights: ['Mirik Lake', 'Himalayan Mountaineering Institute', 'Toy Train ride']
  },
  {
    id: 'meghalaya-waterfalls',
    title: 'Meghalaya Waterfall Wonders',
    duration: '4N/5D',
    category: 'Meghalaya',
    image: d1Image,
    description: 'Explore the land of clouds with stunning waterfalls, living root bridges, and lush green landscapes that feel straight out of a dream.',
    highlights: ['Double Decker Root Bridge', 'Dawki River', 'Nohkalikai Falls']
  },
  {
    id: 'meghalaya-trail',
    title: 'Meghalaya Nature & Culture Trail',
    duration: '5N/6D',
    category: 'Meghalaya',
    image: d2Image,
    description: 'A perfect blend of adventure and culture with visits to Cherrapunji, Dawki river, and traditional Khasi villages.',
    highlights: ['Mawlynnong Village', 'Cherrapunji', 'Shillong Peak']
  }
];

const categories = ['All', 'Bhutan', 'Sikkim', 'Darjeeling', 'Meghalaya'];

export function Packages() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
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

  const filteredPackages = packages.filter(pkg => {
    let matchesCategory = false;
    if (activeCategory === 'All') {
      matchesCategory = true;
    } else if (activeCategory === 'Meghalaya') {
      // Include all packages that are Meghalaya or have "Meghalaya" in the title
      matchesCategory = pkg.category === 'Meghalaya' || pkg.title.toLowerCase().includes('meghalaya');
    } else if (activeCategory === 'Darjeeling') {
      // Include all packages that are Darjeeling or have "Darjeeling" in the title
      matchesCategory = pkg.category === 'Darjeeling' || pkg.title.toLowerCase().includes('darjeeling');
    } else if (activeCategory === 'Sikkim') {
      // Only include packages that are actually Sikkim
      matchesCategory = pkg.category === 'Sikkim';
    } else if (activeCategory === 'Sikkim') {
      // Only include packages that are actually Sikkim
      matchesCategory = pkg.category === 'Sikkim';
    } else {
      matchesCategory = pkg.category === activeCategory;
    }
    const matchesSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         pkg.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Tour Packages',
    url: `${seoSiteUrl}/packages`,
    itemListElement: packages.slice(0, 10).map((pkg, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: pkg.title,
      url: `${seoSiteUrl}/packages`
    }))
  };

  return (
    <div className="w-full">
      <Seo
        title="Bhutan Tour Packages from Jaigaon & Phuentsholing | Newartourandtravels"
        description="Browse customizable Bhutan and Northeast tour packages from Jaigaon and Phuentsholing with flexible durations, premium stays, and local expertise."
        path="/packages"
        keywords="bhutan tour packages from jaigaon, phuentsholing tour and travels, jaigaon bhutan package, newartourandtravels packages"
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
              src={a6Image}
              alt="Himalayan Landscape" 
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
        <Link to="/destinations" className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center cursor-pointer hidden sm:flex group">
          <span className="text-white/60 group-hover:text-white font-bold tracking-[0.2em] text-[0.65rem] uppercase -rotate-90 mb-12 whitespace-nowrap transition-colors">Destinations</span>
          <div className="w-[1px] h-16 bg-white/30 group-hover:bg-white transition-colors"></div>
        </Link>

        <Link to="/contact" className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center cursor-pointer hidden sm:flex group">
          <div className="w-[1px] h-16 bg-white/30 group-hover:bg-white transition-colors mb-12"></div>
          <span className="text-white/60 group-hover:text-white font-bold tracking-[0.2em] text-[0.65rem] uppercase rotate-90 whitespace-nowrap transition-colors">Contact Us</span>
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
            Curated Journeys
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="font-bold text-[4rem] sm:text-[6rem] md:text-[9rem] lg:text-[12rem] text-white leading-none tracking-tighter z-10 uppercase"
            style={{ textShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
          >
            PACKAGES
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-white/80 font-sub text-lg md:text-xl max-w-2xl mt-8 z-20 leading-relaxed"
          >
            Choose from our meticulously crafted itineraries designed to offer you the most authentic and luxurious experience across the Himalayas.
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
            PACKAGES <span className="w-8 h-[2px] bg-white ml-4"></span>
          </span>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-secondary border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-xs md:text-sm font-bold uppercase tracking-[0.25em] pb-4 border-b-2 transition-all duration-500 ${
                    activeCategory === category 
                      ? 'border-accent text-accent' 
                      : 'border-transparent text-gray-500 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input 
                type="text" 
                placeholder="Search journeys..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-white text-sm focus:outline-none focus:border-accent transition-colors font-sub"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-32 bg-primary relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-noise pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/[0.02] blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <AnimatePresence mode="popLayout">
              {filteredPackages.map((pkg) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  key={pkg.id}
                  className="flex flex-col glass-card glass-card-hover rounded-sm group overflow-hidden border border-white/10"
                >
                  {/* Image Side */}
                  <div className="relative h-72 overflow-hidden luxury-border">
                    <Image 
                      src={pkg.image} 
                      alt={pkg.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                      containerClassName="w-full h-full"
                      
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                    <div className="absolute top-6 left-6 glass px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-accent rounded-sm shadow-sm border border-accent/20 gold-glow">
                      {pkg.category}
                    </div>
                    <div className="absolute top-6 right-6 bg-gradient-gold px-4 py-2 flex items-center space-x-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary rounded-sm shadow-lg gold-glow">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-10 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight group-hover:text-accent transition-colors duration-300">{pkg.title}</h3>
                    <p className="text-gray-400 font-sub text-sm mb-8 flex-grow leading-relaxed line-clamp-3 italic">"{pkg.description}"</p>
                    
                    <div className="space-y-4 mb-10">
                      {pkg.highlights.slice(0, 3).map((highlight, i) => (
                        <div key={i} className="flex items-start text-xs text-gray-400 uppercase tracking-wider font-medium">
                          <Check className="w-3.5 h-3.5 text-accent mr-3 mt-0.5 shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col space-y-4 mt-auto pt-8 border-t border-white/10">
                      <button
                        type="button"
                        className="w-full bg-gradient-gold text-primary text-center py-4 rounded-sm uppercase tracking-[0.2em] text-xs font-bold transition-all duration-500 gold-glow gold-glow-hover hover:scale-105 hover:-translate-y-1"
                        onClick={() => {
                          const text =
                            `New Package Booking Request\n` +
                            `-----------------------------\n` +
                            `Package: ${pkg.title}\n` +
                            `Duration: ${pkg.duration}\n` +
                            `Category: ${pkg.category}\n` +
                            `Description: ${pkg.description || ''}\n` +
                            (pkg.highlights && pkg.highlights.length ? `Highlights: ${pkg.highlights.join(', ')}\n` : '');
                          const whatsappUrl = `https://wa.me/917547993621?text=${encodeURIComponent(text)}`;
                          window.open(whatsappUrl, '_blank');
                        }}
                      >
                        Book Your Journey
                      </button>
                      <button 
                        onClick={() => setSelectedPackage(pkg)}
                        className="w-full glass hover:bg-white/10 text-white text-center py-4 rounded-sm uppercase tracking-[0.2em] text-[0.65rem] font-black transition-all duration-300 border border-white/10"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Package Detail Modal */}
      <AnimatePresence>
        {selectedPackage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPackage(null)}
              className="absolute inset-0 bg-primary/95 backdrop-blur-xl"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-[#0a0f1a] border border-white/10 rounded-sm overflow-hidden flex flex-col md:flex-row shadow-2xl"
            >
              <button 
                onClick={() => setSelectedPackage(null)}
                className="absolute top-6 right-6 z-50 w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Image & Quick Info */}
              <div className="w-full md:w-2/5 relative h-64 md:h-auto">
                <Image 
                  src={selectedPackage.image} 
                  alt={selectedPackage.title} 
                  className="w-full h-full object-cover"
                  
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent md:bg-gradient-to-r"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center text-accent text-xs font-black uppercase tracking-[0.2em] mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    {selectedPackage.category}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter leading-none mb-4">{selectedPackage.title}</h2>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center text-white/60 text-xs font-bold uppercase tracking-widest">
                      <Clock className="w-4 h-4 mr-2 text-accent" />
                      {selectedPackage.duration}
                    </div>
                    <div className="flex items-center text-white/60 text-xs font-bold uppercase tracking-widest">
                      <Star className="w-4 h-4 mr-2 text-accent fill-accent" />
                      5.0 Rating
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Details & Itinerary */}
              <div className="w-full md:w-3/5 overflow-y-auto p-8 md:p-12 custom-scrollbar">
                <div className="space-y-12">
                  {/* Overview */}
                  <div>
                    <h4 className="text-accent text-[0.65rem] font-black uppercase tracking-[0.2em] mb-4">Overview</h4>
                    <p className="text-gray-400 font-sub leading-relaxed text-lg">{selectedPackage.description}</p>
                  </div>

                  {/* Itinerary */}
                  {selectedPackage.itinerary && (
                    <div>
                      <h4 className="text-accent text-[0.65rem] font-black uppercase tracking-[0.2em] mb-6">Day-by-Day Itinerary</h4>
                      <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
                        {selectedPackage.itinerary.map((item: any) => (
                          <div key={item.day} className="relative pl-10">
                            <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-accent flex items-center justify-center text-primary text-[0.6rem] font-black z-10 gold-glow">
                              {item.day}
                            </div>
                            <h5 className="text-white font-bold uppercase tracking-tight mb-2">{item.title}</h5>
                            <p className="text-gray-500 font-sub text-sm leading-relaxed">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Inclusions & Exclusions */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <h4 className="text-accent text-[0.65rem] font-black uppercase tracking-[0.2em] mb-4">Inclusions</h4>
                      <ul className="space-y-3">
                        {(selectedPackage.inclusions || ['Luxury Accommodation', 'Private Guide', 'All Meals', 'Internal Transfers']).map((item: string) => (
                          <li key={item} className="flex items-center text-white/70 text-xs font-sub">
                            <Check className="w-3 h-3 text-green-500 mr-3" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-accent text-[0.65rem] font-black uppercase tracking-[0.2em] mb-4">Exclusions</h4>
                      <ul className="space-y-3">
                        {(selectedPackage.exclusions || ['International Flights', 'Travel Insurance', 'Personal Expenses']).map((item: string) => (
                          <li key={item} className="flex items-center text-white/70 text-xs font-sub">
                            <X className="w-3 h-3 text-red-500 mr-3" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4">
                    <Link 
                      to="/contact" 
                      className="flex-1 bg-gradient-gold text-primary font-bold uppercase tracking-[0.2em] py-4 rounded-sm text-center text-xs gold-glow hover:scale-[1.02] transition-all duration-300"
                    >
                      Book This Journey
                    </Link>
                    <button 
                      onClick={() => setSelectedPackage(null)}
                      className="flex-1 border border-white/10 text-white font-bold uppercase tracking-[0.2em] py-4 rounded-sm text-xs hover:bg-white/5 transition-all duration-300"
                    >
                      Close Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
