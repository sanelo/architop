import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Terminal, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-architop-black/80 backdrop-blur-md border-b border-white/10' : 'py-8 bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
          <div className="w-8 h-8 bg-architop-neon text-black flex items-center justify-center rounded-sm">
            <Terminal size={18} strokeWidth={3} />
          </div>
          <span className="text-white">ARCHITOP</span>
        </div>

        <nav className="hidden md:flex gap-8 items-center font-mono text-sm">
          <a href="#manifesto" className="text-gray-400 hover:text-architop-neon transition-colors">THE SECRET</a>
          <a href="#process" className="text-gray-400 hover:text-architop-neon transition-colors">THE PROCESS</a>
          <a href="#pricing" className="text-gray-400 hover:text-architop-neon transition-colors">PRICING</a>
          <button className="px-5 py-2 border border-white/20 text-white hover:bg-white hover:text-black transition-all rounded-full text-xs font-bold uppercase">
            Start Project
          </button>
        </nav>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-architop-black border-b border-white/10 absolute w-full"
        >
          <div className="flex flex-col p-6 gap-4 font-mono">
            <a href="#manifesto" onClick={() => setIsOpen(false)} className="text-lg">THE SECRET</a>
            <a href="#process" onClick={() => setIsOpen(false)} className="text-lg">THE PROCESS</a>
            <a href="#pricing" onClick={() => setIsOpen(false)} className="text-lg">PRICING</a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};