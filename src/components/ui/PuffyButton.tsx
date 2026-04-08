import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface PuffyButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'md' | 'lg' | 'xl';
}

export const PuffyButton: React.FC<PuffyButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'lg',
  className = '',
  ...props 
}) => {
  const variants = {
    primary: 'bg-cat-orange text-white shadow-cozy hover:shadow-cozy-hover hover:bg-cat-accent border-b-4 border-orange-700 active:border-b-0 active:translate-y-[4px]',
    secondary: 'bg-cat-surface text-cat-fg shadow-cozy hover:shadow-cozy-hover border-b-4 border-cat-border active:border-b-0 active:translate-y-[4px] transition-colors',
    outline: 'bg-transparent border-2 border-cat-orange text-cat-orange hover:bg-cat-orange/10 active:translate-y-[2px]',
  };

  const sizes = {
    md: 'px-6 py-2 text-base rounded-2xl font-bold',
    lg: 'px-8 py-3 text-lg rounded-3xl font-bold',
    xl: 'px-10 py-4 text-xl rounded-[2rem] font-black tracking-tight',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        inline-flex items-center justify-center 
        transition-all duration-200 select-none
        ${variants[variant]} 
        ${sizes[size]} 
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
};
