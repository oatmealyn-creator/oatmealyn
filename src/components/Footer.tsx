import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink pt-20 pb-10 border-t border-white/5 text-white/50 text-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h3 className="font-display text-3xl text-white uppercase tracking-widest mb-6">
              Phoenix <span className="text-neon">Fitness</span>
            </h3>
            <p className="mb-6 max-w-xs leading-relaxed">
              The premier destination for athletes and dedicated individuals looking to push their physical limits.
            </p>
            <div className="flex gap-4 text-white hover:text-neon cursor-pointer transition-colors w-max">
              <Instagram className="w-5 h-5" />
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-xs">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="hover:text-neon transition-colors">About Us</a></li>
              <li><a href="#facilities" className="hover:text-neon transition-colors">Facilities</a></li>
              <li><a href="#gallery" className="hover:text-neon transition-colors">Gallery</a></li>
              <li><a href="#reviews" className="hover:text-neon transition-colors">Reviews</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-xs">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-neon" />
                <span>Nedumangad Hwy, <br/> Nedumangad, Kerala 695541</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-neon" />
                <span>097455 50783</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-neon" />
                <span>info@phoenixfitness.in</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-xs">Hours</h4>
            <ul className="space-y-4 font-mono text-xs">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Mon - Fri</span>
                <span className="text-white">5:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Saturday</span>
                <span className="text-white">6:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Sunday</span>
                <span className="text-white">7:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Phoenix Fitness Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
