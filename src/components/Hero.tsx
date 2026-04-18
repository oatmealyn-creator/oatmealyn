import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { playSwoosh } from '../lib/sound';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/gymworkout/1920/1080" 
          alt="Gym Interior" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-ink/30"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 pt-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <h1 className="font-display text-[15vw] leading-[0.8] tracking-tight uppercase mb-4">
            Forged In <br />
            <span className="text-neon">Iron.</span>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl font-light mb-10"
        >
          A premium training facility built for serious athletes. State-of-the-art equipment, expert coaching, and a community of high performers.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          <a href="#booking" onClick={() => playSwoosh()} className="group flex items-center gap-4 bg-neon text-ink px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white transition-colors duration-300">
            Claim Your Spot
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
