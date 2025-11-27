import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Manifesto: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.5"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <section id="manifesto" className="py-32 bg-architop-black relative">
      <div className="container mx-auto px-6">
        <div ref={containerRef} className="max-w-4xl mx-auto">
            <div className="mb-8 font-mono text-architop-neon text-sm uppercase tracking-widest">
                // The Secret Sauce
            </div>
            
            <motion.div 
                style={{ opacity, y }}
                className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight space-y-8"
            >
                <p>
                    <span className="text-white">The best engineers don't write boilerplate.</span> They generate it.
                </p>
                <p className="text-gray-500">
                    Traditional agencies bill you for hours of setup. We care about shipping. By automating the grunt work, we focus 100% on your unique business logic.
                </p>
                <p>
                    <span className="text-architop-neon">Architop</span> gives you the raw velocity of a hackathon with the stability of a senior engineering team.
                </p>
            </motion.div>
        </div>
      </div>
    </section>
  );
};