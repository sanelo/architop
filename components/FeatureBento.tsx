import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Code2, Clock, Box, Layers } from 'lucide-react';

const FeatureCard: React.FC<{
  title: string;
  desc: string;
  icon: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ title, desc, icon, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -5 }}
    className={`bg-architop-card border border-white/5 p-8 rounded-2xl flex flex-col justify-between group hover:border-architop-neon/30 transition-colors ${className}`}
  >
    <div className="mb-6">
      <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white group-hover:bg-architop-neon group-hover:text-black transition-colors duration-300">
        {icon}
      </div>
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

export const FeatureBento: React.FC = () => {
  return (
    <section className="py-24 bg-architop-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
             <h2 className="text-4xl md:text-5xl font-bold mb-4">Built <br/> <span className="text-architop-neon">Different.</span></h2>
             <p className="text-gray-400">The traditional agency model is broken. We fixed it.</p>
          </div>
          <div className="hidden md:block">
            <Layers className="text-architop-neon w-16 h-16 opacity-20" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
            {/* Main Feature - Large */}
            <FeatureCard 
                className="md:col-span-2 md:row-span-1 bg-gradient-to-br from-architop-card to-[#222]"
                title="Hybrid Engine"
                desc="AI creates the structure. Senior engineers refine the logic. It's a continuous loop that delivers high-quality code at impossible speeds."
                icon={<Zap size={24} />}
                delay={0.1}
            />
            
            <FeatureCard 
                title="Production Grade"
                desc="AI writes code, humans audit it. Zero hallucinations in production. Full type safety and compliance."
                icon={<ShieldCheck size={24} />}
                delay={0.2}
            />

            <FeatureCard 
                title="Weeks, Not Months"
                desc="Go from napkin sketch to deployed MVP in record time. We iterate faster than your team can schedule a meeting."
                icon={<Clock size={24} />}
                delay={0.3}
            />

             <FeatureCard 
                className="md:col-span-2 md:row-span-1"
                title="Scalable Architecture"
                desc="We don't write scripts. We build distributed systems designed to handle real traffic, using industry-standard patterns."
                icon={<Box size={24} />}
                delay={0.4}
            />

             <FeatureCard 
                title="No Vendor Lock-in"
                desc="No black boxes. You get clean, documented, tested code. It's yours to keep, forever."
                icon={<Code2 size={24} />}
                delay={0.5}
            />
        </div>
      </div>
    </section>
  );
};