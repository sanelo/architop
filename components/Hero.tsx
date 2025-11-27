import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, User } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const [codeLine, setCodeLine] = useState(0);
  const codeSnippet = [
    "Initializing agent_swarm...",
    "Connecting to Senior_Architect...",
    "Optimizing delivery_pipeline...",
    "Status: 10x Velocity Confirmed."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCodeLine(prev => (prev + 1) % codeSnippet.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-architop-neon/5 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-architop-neon font-mono text-xs tracking-wider">
            <span className="w-2 h-2 rounded-full bg-architop-neon animate-pulse"></span>
            ACCEPTING PROJECTS FOR Q4
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.9]">
            Ship faster. <br />
            <span className="text-gray-500 font-serif italic">Break nothing.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed">
            We're not a typical agency. We use internal agent swarms to generate the groundwork, so our <span className="text-white font-semibold">Senior Engineers</span> can focus on the architecture. 
            <br/><br/>
            Silicon Valley quality at startup speed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button>
              Start Building <ArrowRight size={16} />
            </Button>
            <Button variant="secondary">
              Our Work
            </Button>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-gray-500 pt-8">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-800 border border-black flex items-center justify-center overflow-hidden">
                  <img src={`https://picsum.photos/32/32?random=${i}`} alt="Avatar" className="w-full h-full opacity-70" />
                </div>
              ))}
            </div>
            <p>Trusted by founders from YC, Google, and Meta.</p>
          </div>
        </motion.div>

        {/* Right: Visual/Terminal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* The "Machine" */}
                <div className="absolute inset-0 bg-architop-card border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                    <div className="h-8 bg-black border-b border-white/10 flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                        <div className="ml-auto font-mono text-xs text-gray-600">architop_engine_v2.sh</div>
                    </div>
                    <div className="p-6 font-mono text-sm space-y-4">
                         {codeSnippet.map((line, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: idx <= codeLine ? 1 : 0.2 }}
                                className={`flex gap-3 ${idx === codeLine ? 'text-architop-neon' : 'text-gray-500'}`}
                            >
                                <span className="opacity-30">{`0${idx + 1}`}</span>
                                <span>{line}</span>
                                {idx === codeLine && <span className="w-2 h-4 bg-architop-neon animate-pulse"/>}
                            </motion.div>
                         ))}
                         
                         <div className="mt-8 p-4 border border-architop-neon/20 bg-architop-neon/5 rounded text-xs text-gray-300">
                             <div className="flex justify-between mb-2 uppercase tracking-widest text-[10px] text-architop-neon">
                                 <span>Deployment Velocity</span>
                                 <span>98%</span>
                             </div>
                             <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                                 <motion.div 
                                    className="h-full bg-architop-neon"
                                    initial={{ width: 0 }}
                                    animate={{ width: '98%' }}
                                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                                 />
                             </div>
                         </div>
                    </div>
                </div>

                {/* Floating Elements representing Hybrid Model */}
                <motion.div 
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -left-12 top-20 bg-black border border-gray-700 p-4 rounded-lg shadow-xl flex items-center gap-3"
                >
                    <div className="p-2 bg-blue-500/20 text-blue-400 rounded-md"><Cpu size={20} /></div>
                    <div>
                        <div className="text-xs text-gray-400 font-mono">CODE GEN</div>
                        <div className="font-bold">2,400 LOC/min</div>
                    </div>
                </motion.div>

                <motion.div 
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-12 bottom-40 bg-white text-black p-4 rounded-lg shadow-xl flex items-center gap-3"
                >
                    <div className="p-2 bg-black/10 text-black rounded-md"><User size={20} /></div>
                    <div>
                        <div className="text-xs text-black/60 font-mono">ARCHITECT</div>
                        <div className="font-bold">Strategic Review</div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};