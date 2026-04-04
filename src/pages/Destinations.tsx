import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { MapPin, Calendar, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/Image';

const destinations = [
  {
    id: 'tiger-nest',
    name: 'Tiger Nest Monastery',
    location: 'Paro',
    image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&w=600&fit=crop',
    description: 'Paro Taktsang, also known as the Tiger\'s Nest, is a prominent Himalayan Buddhist sacred site and the temple complex is located in the cliffside of the upper Paro valley in Bhutan. It is one of the most venerated and famous of Bhutan\'s monasteries.',
    bestTime: 'March to May and September to November',
    tips: 'The hike takes about 2-3 hours one way. Wear comfortable trekking shoes and carry water. Start early to avoid the midday sun.'
  },
  {
    id: 'dochula-pass',
    name: 'Dochula Pass',
    location: 'Thimphu to Punakha',
    image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&w=600&fit=crop',
    description: 'The Dochula Pass is a mountain pass in the snow covered Himalayas within Bhutan on the road from Thimphu to Punakha where 108 memorial chortens or stupas known as "Druk Wangyal Chortens" have been built by Ashi Dorji Wangmo Wangchuck.',
    bestTime: 'October to February for clear views of the Himalayas',
    tips: 'It can be very windy and cold at the pass, so carry a warm jacket. The cafe at the pass offers great views with warm tea.'
  },
  {
    id: 'punakha-dzong',
    name: 'Punakha Dzong',
    location: 'Punakha',
    image: 'https://images.pexels.com/photos/9982525/pexels-photo-9982525.jpeg?auto=compress&w=600&fit=crop',
    description: 'Punakha Dzong, also known as Pungthang Dewa chhenbi Phodrang (meaning "the palace of great happiness or bliss"), is the administrative centre of Punakha District in Punakha, Bhutan. It is the second oldest and second largest dzong in Bhutan.',
    bestTime: 'Spring (March-May) when the jacaranda trees are in bloom',
    tips: 'Modest dress is required to enter the Dzong (shoulders and legs covered). The confluence of the Pho Chhu and Mo Chhu rivers here is a must-see.'
  },
  {
    id: 'phobjikha',
    name: 'Phobjikha Valley',
    location: 'Wangdue Phodrang',
    image: 'https://images.pexels.com/photos/20724436/pexels-photo-20724436.jpeg?auto=compress&w=600&fit=crop',
    description: 'The Phobjikha Valley is a vast U-shaped glacial valley, also known as Gangteng Valley named after the impressive Gangteng Monastery of the Nyingma sect in central Bhutan. It is the winter home of the rare Black-necked Cranes.',
    bestTime: 'Late October to mid-February to see the Black-necked Cranes',
    tips: 'It is a high-altitude valley and can get very cold. The Gangtey Nature Trail is a beautiful short hike to explore the valley.'
  },
  {
    id: 'chimi-lhakhang',
    name: 'Chimi Lhakhang',
    location: 'Punakha',
    image: 'https://images.pexels.com/photos/35560938/pexels-photo-35560938.jpeg?auto=compress&w=600&fit=crop',
    description: 'Chimi Lhakhang is a Buddhist monastery in Punakha District, Bhutan. Located near Lobesa, it stands on a round hillock and was built in 1499 by the 14th Drukpa hierarch, Ngawang Choegyel. It is widely known as the "Fertility Temple".',
    bestTime: 'Year-round',
    tips: 'The walk to the temple takes about 20 minutes through rice paddies and the village of Sopsokha. The village is known for its phallus paintings.'
  },
  {
    id: 'buddha-point',
    name: 'Buddha Point (Buddha Dordenma)',
    location: 'Thimphu',
    image: 'https://images.pexels.com/photos/7497599/pexels-photo-7497599.jpeg?auto=compress&w=600&fit=crop',
    description: 'Great Buddha Dordenma is a gigantic Shakyamuni Buddha statue in the mountains of Bhutan celebrating the 60th anniversary of fourth king Jigme Singye Wangchuck. The statue houses over one hundred thousand smaller Buddha statues.',
    bestTime: 'Early morning or late afternoon for the best light and views of Thimphu valley',
    tips: 'It is a great place for photography. The large plaza offers panoramic views of the entire Thimphu city.'
  },
  {
    id: 'hanging-bridge',
    name: 'Punakha Suspension Bridge',
    location: 'Punakha',
    image: 'https://images.pexels.com/photos/6876381/pexels-photo-6876381.jpeg?auto=compress&w=600&fit=crop',
    description: 'One of the longest suspension bridges in Bhutan, spanning 160 meters over the Po Chhu river. Draped with prayer flags, the bridge connects Punakha Dzong to the villages of Shengana, Samdingkha, and Wangkha.',
    bestTime: 'Year-round',
    tips: 'It can be a bit swaying, so hold on to the sides if you are afraid of heights. The prayer flags fluttering in the wind make for a beautiful sight.'
  },
  {
    id: 'tsomgo-lake',
    name: 'Tsomgo Lake',
    location: 'East Sikkim',
    image: 'https://images.pexels.com/photos/10477351/pexels-photo-10477351.jpeg?auto=compress&w=600&fit=crop',
    description: 'Tsomgo Lake, also known as Changu Lake, is a glacial lake in the East Sikkim district of the Indian state of Sikkim, some 40 kilometres from the capital Gangtok. The lake remains frozen during the winter season.',
    bestTime: 'March to May and October to December',
    tips: 'A permit is required to visit the lake. It is located at a high altitude, so take it slow to avoid altitude sickness.'
  },
  {
    id: 'rumtek-monastery',
    name: 'Rumtek Monastery',
    location: 'Gangtok',
    image: 'https://images.pexels.com/photos/35560938/pexels-photo-35560938.jpeg?auto=compress&w=600&fit=crop',
    description: 'Rumtek Monastery, also called the Dharmachakra Centre, is a gompa located in the Indian state of Sikkim near the capital Gangtok. It is a focal point for the sectarian tensions within the Karma Kagyu school of Tibetan Buddhism.',
    bestTime: 'Year-round',
    tips: 'The monastery is a great place to learn about Tibetan Buddhism. The architecture is stunning and the views of Gangtok are beautiful.'
  },
  {
    id: 'tiger-hill',
    name: 'Tiger Hill',
    location: 'Darjeeling',
    image: 'https://images.pexels.com/photos/33263641/pexels-photo-33263641.jpeg?auto=compress&w=600&fit=crop',
    description: 'Tiger Hill is located in Darjeeling, in the Indian state of West Bengal. It is the summit of Ghoom, the highest railway station in the Darjeeling Himalayan Railway – a UNESCO World Heritage Site. It has a panoramic view of Mount Everest and Mount Kanchenjunga together.',
    bestTime: 'October to December and March to May',
    tips: 'Wake up early to catch the sunrise. It can get very crowded, so reach there by 4:00 AM.'
  },
  {
    id: 'batasia-loop',
    name: 'Batasia Loop',
    location: 'Darjeeling',
    image: 'https://images.pexels.com/photos/33263641/pexels-photo-33263641.jpeg?auto=compress&w=600&fit=crop',
    description: 'A spiral railway created to lower the gradient of ascent of the Darjeeling Himalayan Railway. It offers a panoramic view of the Darjeeling town and the Kanchenjunga range.',
    bestTime: 'Year-round',
    tips: 'The war memorial at the center is a great place for photos. Watch the toy train navigate the loop for a classic Darjeeling experience.'
  },
  {
    id: 'dawki-river',
    name: 'Umngot River (Dawki)',
    location: 'Dawki, Meghalaya',
    image: 'https://images.pexels.com/photos/34017584/pexels-photo-34017584.jpeg?auto=compress&w=600&fit=crop',
    description: 'Famous for its crystal clear water where boats appear to be floating in the air. It is one of the cleanest rivers in India and a major tourist attraction in Meghalaya.',
    bestTime: 'November to May for the clearest water',
    tips: 'Boating is a must. The water is so clear you can see the river bed. Visit early in the morning for the best experience.'
  },
  {
    id: 'root-bridge',
    name: 'Double Decker Root Bridge',
    location: 'Cherrapunji',
    image: 'https://images.pexels.com/photos/34017584/pexels-photo-34017584.jpeg?auto=compress&w=600&fit=crop',
    description: 'The Double Decker Living Root Bridge is a unique natural wonder located in the village of Nongriat, near Cherrapunji in Meghalaya. These bridges are handmade from the aerial roots of rubber fig trees by the Khasi and Jaintia people.',
    bestTime: 'September to May',
    tips: 'The trek to the bridge involves descending over 3,000 steps. It is physically demanding but the destination is absolutely worth it.'
  }
];

export function Destinations() {
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
              src="https://images.pexels.com/photos/35560938/pexels-photo-35560938.jpeg?auto=compress&w=2500&fit=crop" 
              alt="Himalayan Luxury Landscape" 
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
        <Link to="/about" className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center cursor-pointer hidden sm:flex group">
          <span className="text-white/60 group-hover:text-white font-bold tracking-[0.2em] text-[0.65rem] uppercase -rotate-90 mb-12 whitespace-nowrap transition-colors">About Us</span>
          <div className="w-[1px] h-16 bg-white/30 group-hover:bg-white transition-colors"></div>
        </Link>

        <Link to="/packages" className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center cursor-pointer hidden sm:flex group">
          <div className="w-[1px] h-16 bg-white/30 group-hover:bg-white transition-colors mb-12"></div>
          <span className="text-white/60 group-hover:text-white font-bold tracking-[0.2em] text-[0.65rem] uppercase rotate-90 whitespace-nowrap transition-colors">Packages</span>
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
            Explore Iconic
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="font-bold text-[4rem] sm:text-[6rem] md:text-[9rem] lg:text-[12rem] text-white leading-none tracking-tighter z-10 uppercase"
            style={{ textShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
          >
            DESTINATIONS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-white/80 font-sub text-lg md:text-xl max-w-2xl mt-8 z-20 leading-relaxed"
          >
            Discover the spiritual heart and breathtaking landscapes of Bhutan. From ancient fortresses to sacred monasteries perched on cliffs.
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
            DESTINATIONS <span className="w-8 h-[2px] bg-white ml-4"></span>
          </span>
        </motion.div>
      </section>

      {/* Destinations List */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-noise pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-[150px] rounded-full translate-x-1/2 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="space-y-32">
            {destinations.map((dest, index) => (
              <motion.div 
                key={dest.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm luxury-border gold-glow">
                    <Image 
                      src={(() => {
                        switch(dest.id) {
                          case 'tiger-nest':
                            return 'https://images.pexels.com/photos/35402324/pexels-photo-35402324.jpeg?auto=compress&w=1200&fit=crop';
                          case 'dochula-pass':
                            return 'https://images.pexels.com/photos/33296797/pexels-photo-33296797.jpeg?auto=compress&w=1200&fit=crop';
                          case 'punakha-dzong':
                            return 'https://images.pexels.com/photos/9982525/pexels-photo-9982525.jpeg?auto=compress&w=1200&fit=crop';
                          case 'phobjikha':
                            return 'https://images.pexels.com/photos/20724436/pexels-photo-20724436.jpeg?auto=compress&w=1200&fit=crop';
                          case 'chimi-lhakhang':
                            return 'https://images.pexels.com/photos/34788544/pexels-photo-34788544.jpeg?auto=compress&w=1200&fit=crop';
                          case 'buddha-point':
                            return 'https://images.pexels.com/photos/17332516/pexels-photo-17332516.jpeg?auto=compress&w=1200&fit=crop';
                          case 'hanging-bridge':
                            return 'https://images.pexels.com/photos/6876381/pexels-photo-6876381.jpeg?auto=compress&w=1200&fit=crop';
                          case 'tsomgo-lake':
                            return 'https://images.pexels.com/photos/10477351/pexels-photo-10477351.jpeg?auto=compress&w=1200&fit=crop';
                          case 'rumtek-monastery':
                            return 'https://images.pexels.com/photos/29514018/pexels-photo-29514018.jpeg?auto=compress&w=1200&fit=crop';
                          case 'tiger-hill':
                            return 'https://images.pexels.com/photos/33263641/pexels-photo-33263641.jpeg?auto=compress&w=1200&fit=crop';
                          case 'batasia-loop':
                            return 'https://images.pexels.com/photos/35151733/pexels-photo-35151733.jpeg?auto=compress&w=1200&fit=crop';
                          case 'dawki-river':
                            return 'https://images.pexels.com/photos/11622977/pexels-photo-11622977.jpeg?auto=compress&w=1200&fit=crop';
                          case 'root-bridge':
                            return 'https://images.pexels.com/photos/34017584/pexels-photo-34017584.jpeg?auto=compress&w=1200&fit=crop';
                          default:
                            return dest.image;
                        }
                      })()} 
                      alt={dest.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                      containerClassName="w-full h-full"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60"></div>
                  </div>
                  {/* Decorative element */}
                  <div className={`absolute -bottom-4 ${index % 2 !== 0 ? '-left-4' : '-right-4'} w-24 h-24 border-accent/20 ${index % 2 !== 0 ? 'border-l-2 border-b-2' : 'border-r-2 border-b-2'} pointer-events-none`}></div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <div>
                    <span className="font-cursive text-4xl text-accent mb-4 block">{dest.location}</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 uppercase tracking-tight">{dest.name}</h2>
                    <div className="w-20 h-[2px] bg-accent"></div>
                  </div>
                  
                  <p className="text-gray-300 font-sub text-lg leading-relaxed">{dest.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass p-8 rounded-sm border border-white/10 glass-card-hover group">
                      <div className="flex items-center text-accent mb-4">
                        <Calendar className="w-5 h-5 mr-3" />
                        <span className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-white/60">Best Time</span>
                      </div>
                      <p className="text-white font-sub">{dest.bestTime}</p>
                    </div>
                    <div className="glass p-8 rounded-sm border border-white/10 glass-card-hover group">
                      <div className="flex items-center text-accent mb-4">
                        <Info className="w-5 h-5 mr-3" />
                        <span className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-white/60">Travel Tip</span>
                      </div>
                      <p className="text-white font-sub">{dest.tips}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Information Section */}
      <section className="py-32 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-noise pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="font-cursive text-4xl text-accent mb-4 block">Traveler's Guide</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">Essential Information</h2>
            <div className="w-24 h-[2px] bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-sm border-t-2 border-accent"
            >
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest">Visas & Permits</h3>
              <p className="text-gray-400 font-sub text-sm leading-relaxed mb-4">
                Bhutan requires a visa for most nationalities (except India, Bangladesh, and Maldives). Indian tourists require an Entry Permit.
              </p>
              <p className="text-gray-400 font-sub text-sm leading-relaxed">
                Sikkim and certain parts of Meghalaya also require Inner Line Permits (ILP) or Restricted Area Permits (RAP) for foreign nationals.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass p-10 rounded-sm border-t-2 border-accent"
            >
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest">Best Time to Visit</h3>
              <p className="text-gray-400 font-sub text-sm leading-relaxed mb-4">
                <strong className="text-white">Spring (Mar-May):</strong> Perfect for rhododendrons and pleasant weather.
              </p>
              <p className="text-gray-400 font-sub text-sm leading-relaxed">
                <strong className="text-white">Autumn (Sep-Nov):</strong> Crystal clear mountain views and vibrant festivals.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass p-10 rounded-sm border-t-2 border-accent"
            >
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest">Packing Essentials</h3>
              <ul className="text-gray-400 font-sub text-sm space-y-3">
                <li className="flex items-start"><span className="text-accent mr-2">•</span> Layered clothing for varying altitudes</li>
                <li className="flex items-start"><span className="text-accent mr-2">•</span> Sturdy walking or hiking shoes</li>
                <li className="flex items-start"><span className="text-accent mr-2">•</span> Sunscreen, hat, and sunglasses</li>
                <li className="flex items-start"><span className="text-accent mr-2">•</span> Modest attire for temple visits</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-noise pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 uppercase tracking-tighter leading-none">Ready to <span className="text-accent italic font-cursive normal-case tracking-normal">Experience</span> These Wonders?</h2>
            <p className="text-gray-400 font-sub text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Our experts can help you combine these destinations into a seamless, luxury itinerary.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="bg-gradient-gold text-primary px-12 py-5 rounded-sm font-bold uppercase tracking-[0.25em] text-xs gold-glow gold-glow-hover hover:scale-105 transition-all duration-500">
                Plan My Adventure
              </Link>
              <Link to="/packages" className="glass text-white px-12 py-5 rounded-sm font-bold uppercase tracking-[0.25em] text-xs hover:bg-white/10 transition-all duration-500 border border-white/10">
                View All Packages
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
