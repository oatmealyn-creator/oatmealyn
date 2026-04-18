/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Booking from './components/Booking';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans antialiased text-white selection:bg-neon selection:text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Facilities />
        <Gallery />
        <Reviews />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
