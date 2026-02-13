import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { HeroSection } from '../components/HeroSection';
import { SkillsSection } from '../components/SkillsSection';
import { PortfolioSection } from '../components/PortfolioSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { EducationSection } from '../components/EducationSection';
import { Menu, X } from 'lucide-react';
export function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [
  {
    label: 'About',
    href: '#top'
  },
  {
    label: 'Skills',
    href: '#skills'
  },
  {
    label: 'Portfolio',
    href: '#portfolio'
  },
  {
    label: 'Experience',
    href: '#experience'
  },
  {
    label: 'Education',
    href: '#education'
  }];

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    if (href === '#top') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#0B1121] text-white">
      <AnimatedBackground />

      {/* Sticky Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0B1121]/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div
            className={`font-bold text-xl tracking-tight cursor-pointer transition-opacity ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => scrollToSection('#top')}>

            EM<span className="text-[#22d3ee]">.</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-1 bg-white/5 rounded-full p-1 border border-white/10 backdrop-blur-sm">
            {navItems.map((item) =>
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="px-4 py-1.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-colors">

                {item.label}
              </button>
            )}
            <button
              onClick={() =>
              window.location.href = 'mailto:elinamrachkovska@gmail.com'
              }
              className="px-4 py-1.5 text-sm font-bold text-[#0B1121] bg-[#22d3ee] hover:bg-[#06b6d4] rounded-full transition-colors ml-1">

              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>

            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            y: -20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -20
          }}
          className="fixed inset-0 z-40 bg-[#0B1121] pt-24 px-4 md:hidden">

            <div className="flex flex-col gap-4">
              {navItems.map((item) =>
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-lg font-medium text-gray-300 hover:text-white py-2 border-b border-white/10 text-left">

                  {item.label}
                </button>
            )}
              <button
              onClick={() =>
              window.location.href = 'mailto:elinamrachkovska@gmail.com'
              }
              className="mt-4 w-full py-3 font-bold text-[#0B1121] bg-[#22d3ee] rounded-lg">

                Contact Me
              </button>
            </div>
          </motion.div>
        }
      </AnimatePresence>

      <div className="relative z-10" id="top">
        <HeroSection />
        <SkillsSection />
        <PortfolioSection />
        <ExperienceSection />
        <EducationSection />

        <footer className="py-12 text-center text-sm text-gray-500 border-t border-white/10 mt-12 bg-[#0B1121]">
          <p className="mb-4">
            © 2024 Elina Mrachkovska. All rights reserved.
          </p>
          <p>Designed & Built with React, Tailwind CSS & Framer Motion.</p>
        </footer>
      </div>
    </main>);

}