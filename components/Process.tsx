import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Architect",
    desc: "You talk to an Engineer, not a salesperson. We map out schemas and flows before writing a single line."
  },
  {
    num: "02",
    title: "Generate",
    desc: "Our agent clusters spin up the boilerplate, tests, and UI components in parallel. Days of work in minutes."
  },
  {
    num: "03",
    title: "Refine",
    desc: "The Architect steps in. They review the AI output, optimize the logic, and ensure the 'soul' of the app is perfect."
  },
  {
    num: "04",
    title: "Deploy",
    desc: "We push to production. We hand over the keys, the repo, and the docs. You own everything."
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white text-black relative overflow-hidden">
        {/* Decorative background grid */}
        <div className="absolute inset-0 z-0 opacity-5" 
             style={{ 
                 backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
                 backgroundSize: '40px 40px' 
             }} 
        />
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="mb-20 text-center">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">How It Works</h2>
                <p className="text-xl text-gray-600">Silicon speed. Human judgment.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.6 }}
                        className="relative group"
                    >
                        <div className="border-l-2 border-gray-200 pl-6 group-hover:border-black transition-colors duration-500 h-full">
                            <span className="block text-6xl font-bold text-gray-200 group-hover:text-architop-neon transition-colors duration-300 -ml-10 mb-4 font-mono">
                                {step.num}
                            </span>
                            <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {step.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};