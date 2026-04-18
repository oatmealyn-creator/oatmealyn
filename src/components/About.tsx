import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="about" className="py-32 bg-ink relative overflow-hidden" ref={containerRef}>
      {/* Background scrolling marquee */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[200vw] text-surface/30 font-display text-[20vw] leading-none uppercase whitespace-nowrap opacity-50 z-0 select-none pointer-events-none">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        >
          FORGED IN IRON • NO EXCUSES • PHOENIX FITNESS • FORGED IN IRON • NO EXCUSES • PHOENIX FITNESS •
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-6xl md:text-8xl leading-none uppercase mb-8">
              More Than <span className="text-outline text-transparent">Sweat.</span> <br/>
              Pure <span className="text-neon">Science.</span>
            </h2>
            <p className="text-white/70 text-lg mb-6 font-light leading-relaxed">
              We stripped away the juice bars and neon distractions to focus on what matters: results. Our facility is engineered for those who treat training as a discipline, not a hobby.
            </p>
            <p className="text-white/70 text-lg font-light leading-relaxed mb-8">
              With competition-grade power racks, an expansive turf zone, and recovery suites, everything here serves a purpose.
            </p>
            
            <div className="flex gap-12">
              <div>
                <div className="font-display text-5xl text-neon mb-1">10k</div>
                <div className="text-sm font-semibold uppercase tracking-widest text-white/50">Sq Ft Space</div>
              </div>
              <div>
                <div className="font-display text-5xl text-neon mb-1">24/7</div>
                <div className="text-sm font-semibold uppercase tracking-widest text-white/50">Access</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
          >
            <motion.img 
              style={{ y, scale: 1.15 }}
              src="https://picsum.photos/seed/kettlebell/800/1000" 
              alt="Gym Equipment" 
              className="w-full h-[120%] object-cover absolute top-[-10%]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
