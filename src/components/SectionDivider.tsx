import { motion } from 'motion/react';

export default function SectionDivider() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 relative py-4 select-none pointer-events-none">
      <div className="relative flex items-center justify-between">
        {/* Left anchor crosshair */}
        <motion.span 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[10px] font-mono text-stone-300 dark:text-stone-750 font-light"
        >
          +
        </motion.span>
        
        {/* Animated line expanding from center */}
        <div className="flex-grow mx-4 relative h-[1px]">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-stone-200/50 to-transparent dark:via-stone-800/70 h-[1px]"
          />
        </div>
        
        {/* Right anchor crosshair */}
        <motion.span 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[10px] font-mono text-stone-300 dark:text-stone-750 font-light"
        >
          +
        </motion.span>
      </div>
    </div>
  );
}
