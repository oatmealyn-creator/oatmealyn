import { motion } from 'motion/react';
import { Dumbbell, Activity, ShieldCheck, Flame } from 'lucide-react';

const facilities = [
  {
    icon: Dumbbell,
    title: 'Free Weights',
    desc: 'competition collars, calibrated plates, and premium barbells.'
  },
  {
    icon: Activity,
    title: 'Cardio Zone',
    desc: 'Air bikes, rowers, and curved treadmills for high-intensity work.'
  },
  {
    icon: ShieldCheck,
    title: 'Recovery',
    desc: 'Cold plunges and infrared saunas to accelerate tissue repair.'
  },
  {
    icon: Flame,
    title: 'Functional Turf',
    desc: '40 yards of premium turf for sled pushes and agility work.'
  }
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-32 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-7xl uppercase mb-6">Built To <span className="text-neon">Perform</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto">Elite-tier equipment across a meticulously designed floor plan.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((fac, i) => {
            const Icon = fac.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`bg-ink p-8 rounded-2xl border border-white/5 hover:border-neon/30 transition-colors group ${i % 2 === 0 ? 'animate-float' : 'animate-float-delayed'}`}
              >
                <div className="w-14 h-14 bg-surface rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-neon group-hover:text-ink transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wide mb-3">{fac.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {fac.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
