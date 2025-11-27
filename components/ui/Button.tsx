import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseClasses = "relative px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider transition-all duration-300 overflow-hidden group border";
  
  const variants = {
    primary: "bg-architop-neon text-black border-architop-neon hover:bg-white hover:border-white",
    secondary: "bg-architop-dark text-white border-architop-border hover:border-architop-neon hover:text-architop-neon",
    outline: "bg-transparent text-white border-white hover:bg-white hover:text-black"
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {variant === 'primary' && (
        <div className="absolute inset-0 h-full w-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 -z-0 ease-in-out" />
      )}
    </motion.button>
  );
};