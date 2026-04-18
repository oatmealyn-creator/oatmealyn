import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Alex M.",
    date: "2 months ago",
    text: "Best powerlifting gym I've ever trained at. The plates are perfectly calibrated and the environment pushes you to be better.",
    rating: 5
  },
  {
    name: "Priya K.",
    date: "1 month ago",
    text: "Incredible facility. The trainers actually know what they're doing and the equipment is top tier. Zero complaints.",
    rating: 5
  },
  {
    name: "James L.",
    date: "3 weeks ago",
    text: "No nonsense, just hard work. If you're serious about your fitness, this is the only place you should be looking at.",
    rating: 5
  },
  {
    name: "Vikram R.",
    date: "1 week ago",
    text: "The turf zone and the recovery stretch area are insane. Highly recommend for athletes.",
    rating: 5
  },
  {
    name: "Neha M.",
    date: "2 days ago",
    text: "Cleanest equipment I've ever seen. The community here is intimidating at first but extremely supportive once you join.",
    rating: 5
  },
  {
    name: "Arjun P.",
    date: "Just now",
    text: "If you want real results, go here. The coaching has completely changed my perspective on heavy lifts.",
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-32 bg-surface">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-display text-5xl md:text-7xl uppercase mb-4">Word of <span className="text-neon">Mouth</span></h2>
            <div className="flex items-center gap-3">
              <div className="bg-[#4285F4] text-white p-2 rounded-full font-bold w-10 h-10 flex items-center justify-center text-sm">G</div>
              <div className="font-medium">Google Reviews</div>
              <div className="flex items-center text-neon ml-2">
                5.0 <Star className="w-4 h-4 ml-1 fill-neon" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-ink p-8 rounded-2xl flex flex-col justify-between border border-white/5 hover:border-neon/30 transition-colors"
            >
              <div>
                <div className="flex text-neon mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-neon" />
                  ))}
                </div>
                <p className="text-white/80 leading-relaxed italic mb-8">"{review.text}"</p>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                <div className="font-bold uppercase tracking-wider text-sm">{review.name}</div>
                <div className="text-xs text-white/40">{review.date}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
