import { motion } from 'motion/react';

const images = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1471&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1596357395217-80de13130e92?q=80&w=1471&auto=format&fit=crop",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-ink">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-5xl md:text-7xl uppercase mb-16 text-center">
          The <span className="text-neon">Arena</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
          {images.map((img, i) => (
            <motion.div
              key={img}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative group overflow-hidden rounded-xl ${
                i === 0 || i === 4 ? 'md:col-span-2' : ''
              } ${i === 2 ? 'md:row-span-2' : ''}`}
            >
              <img 
                src={img} 
                alt={`Gym facility ${i + 1}`} 
                className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-ink/20 group-hover:bg-transparent transition-colors"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
