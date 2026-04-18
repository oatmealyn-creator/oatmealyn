import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { playSwoosh } from '../lib/sound';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClaimClick = () => {
    const target = document.getElementById('booking');
    if (target) {
      const rect = target.getBoundingClientRect();
      // If the top of the booking section is more than 30% of the screen away, play the sound
      // (This implies they are not already looking at the form)
      if (Math.abs(rect.top) > window.innerHeight * 0.4) {
        playSwoosh();
      }
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-ink/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-display text-2xl tracking-widest uppercase flex items-center gap-2">
          Phoenix <span className="text-neon">Fitness</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium uppercase tracking-wider text-white/70 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#booking" onClick={handleClaimClick} className="bg-white/10 hover:bg-neon hover:text-ink px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-colors backdrop-blur-sm border border-white/20 hover:border-transparent">
            Claim Your Spot
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-ink/95 backdrop-blur-xl border-t border-white/10 py-6 px-6 flex flex-col gap-6 shadow-xl">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium uppercase tracking-wider text-white/80 hover:text-neon">
              {link.name}
            </a>
          ))}
          <a href="#booking" onClick={handleClaimClick} className="bg-neon text-ink px-5 py-3 rounded text-center font-bold uppercase tracking-wider mt-2">
            Claim Your Spot
          </a>
        </div>
      )}
    </nav>
  );
}
