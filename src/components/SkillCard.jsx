import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const SkillCard = ({ title, description, icon }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ perspective: 1000 }}
      className="relative flex items-center justify-center w-full h-80 cursor-pointer"
    >
      <motion.div
        style={{ rotateX, rotateY }}
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        className="w-full h-full rounded-2xl bg-slate/80 backdrop-blur-md border border-indigo/50 overflow-hidden relative shadow-2xl group flex flex-col"
      >
        {/* Holographic Reflection Layer */}
        <div className="absolute inset-0 bg-card-holo opacity-0 group-hover:opacity-30 transition-opacity duration-500 mix-blend-color-dodge z-10 pointer-events-none" />
        
        {/* Card Content */}
        <div className="p-6 flex flex-col h-full z-20 relative">
          <div className="border-b border-indigo/30 pb-3 mb-4 text-center">
            <h3 className="text-xl font-bold text-neonBlue tracking-wide">{title}</h3>
          </div>
          
          <div className="flex-grow flex items-center justify-center py-2 text-neonBlue">
            <div className="w-24 h-24 rounded-full bg-indigo/20 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.5)] group-hover:scale-110 transition-transform duration-300">
               {icon}
            </div>
          </div>

          <div className="mt-auto text-center">
            <p className="text-sm text-gray-300 font-light leading-relaxed">{description}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;