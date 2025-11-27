import React from 'react';
import { Terminal, Twitter, Linkedin, Github } from 'lucide-react';
import { Button } from './ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer id="pricing" className="bg-architop-black pt-32 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                    Let's <br/> <span className="text-architop-neon">build.</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-md mb-8">
                    Stop waiting for traditional dev shops. Get a senior engineering team augmented by infinite compute.
                </p>
                <div className="flex gap-4">
                     <Button>Book Consultation</Button>
                </div>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold mb-6">Estimated Cost Savings</h3>
                <div className="space-y-6 font-mono text-sm">
                    <div>
                        <div className="flex justify-between mb-2 text-gray-400">
                            <span>Traditional Agency</span>
                            <span>$50k - $150k / mo</span>
                        </div>
                        <div className="w-full bg-gray-800 h-2 rounded-full">
                            <div className="w-full h-full bg-gray-600 rounded-full"></div>
                        </div>
                    </div>
                     <div>
                        <div className="flex justify-between mb-2 text-white font-bold">
                            <span>Architop Model</span>
                            <span className="text-architop-neon">$15k - $30k / mo</span>
                        </div>
                        <div className="w-full bg-gray-800 h-2 rounded-full">
                            <div className="w-[30%] h-full bg-architop-neon rounded-full shadow-[0_0_15px_rgba(204,255,0,0.6)]"></div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 text-xs text-gray-500">
                    *Based on average Series A MVP development cycles.
                </div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-gray-500">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
                <Terminal size={16} className="text-architop-neon" />
                <span className="font-mono">ARCHITOP INC. © 2024</span>
            </div>
            
            <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
                <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
            </div>
        </div>
      </div>
    </footer>
  );
};