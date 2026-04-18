import { motion, AnimatePresence } from 'motion/react';
import { Loader2, Check, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function Booking() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status !== 'idle') return;
    
    // Strict Gmail constraint (as requested initially to prevent Yahoo, etc.)
    if (!email.toLowerCase().trim().endsWith('@gmail.com')) {
      setEmailError('Please use a valid @gmail.com address.');
      return;
    }

    setEmailError('');
    setStatus('submitting');
    
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setEmail('');
      }, 3000);
    }, 1500);
  };

  return (
    <section id="booking" className="py-32 bg-neon text-ink relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-2xl animate-float">
          <div className="text-center mb-12">
            <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tight mb-4 text-ink">Claim Your <span className="text-outline text-transparent" style={{ WebkitTextStrokeColor: '#050505'}}>Spot</span></h2>
            <p className="text-ink/70 font-medium">Book a day pass or schedule a tour. No commitments.</p>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider ml-1 text-ink">Full Name</label>
                <input type="text" required placeholder="Rahul Sharma" className="w-full bg-surface/5 border-2 border-ink/10 rounded-xl px-4 py-3 focus:outline-none focus:border-ink transition-colors text-ink" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider ml-1 text-ink">Email Address</label>
                <div className="relative">
                  <input 
                    type="email" 
                    required 
                    placeholder="rahul@gmail.com" 
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError('');
                    }}
                    className={`w-full bg-surface/5 border-2 ${emailError ? 'border-red-500 focus:border-red-500' : 'border-ink/10 focus:border-ink'} rounded-xl px-4 py-3 focus:outline-none transition-colors text-ink`} 
                  />
                  <AnimatePresence>
                    {emailError && (
                      <motion.div 
                        initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}
                        className="absolute top-[105%] left-1 flex items-center gap-1 text-red-500 text-xs font-bold z-10 bg-white p-1 rounded"
                      >
                        <AlertCircle className="w-4 h-4 shrink-0" /> <span className="leading-tight">{emailError}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider ml-1 text-ink">What are you looking for?</label>
              <select className="w-full bg-surface/5 border-2 border-ink/10 rounded-xl px-4 py-3 focus:outline-none focus:border-ink transition-colors appearance-none text-ink">
                <option>Day Pass</option>
                <option>Facility Tour</option>
                <option>Personal Training Consultation</option>
                <option>Membership Inquiry</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider ml-1 text-ink">Message (Optional)</label>
              <textarea placeholder="Tell us about your goals..." rows={4} className="w-full bg-surface/5 border-2 border-ink/10 rounded-xl px-4 py-3 focus:outline-none focus:border-ink transition-colors resize-none text-ink"></textarea>
            </div>
            
            <button 
              type="submit"
              disabled={status !== 'idle'}
              className="w-full bg-ink text-neon font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-ink/90 transition-transform active:scale-[0.98] disabled:opacity-80 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center h-16 mt-4"
            >
              <AnimatePresence mode="wait">
                {status === 'idle' && (
                  <motion.span 
                    key="idle"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                  >
                    Submit Request
                  </motion.span>
                )}
                {status === 'submitting' && (
                  <motion.span 
                    key="submitting"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="flex items-center gap-2 text-neon"
                  >
                    <Loader2 className="w-5 h-5 animate-spin" /> Processing
                  </motion.span>
                )}
                {status === 'success' && (
                  <motion.span 
                    key="success"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="flex items-center gap-2 text-green-400"
                  >
                    <Check className="w-5 h-5" /> Request Sent!
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
