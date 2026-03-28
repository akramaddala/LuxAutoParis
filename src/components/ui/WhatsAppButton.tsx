'use client';

import {motion} from 'framer-motion';
import {Phone} from 'lucide-react';

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/33618235221"
      target="_blank"
      rel="noopener noreferrer"
      initial={{opacity: 0, scale: 0.5}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 0.5, delay: 2}}
      className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 text-white rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] hover:scale-110 transition-all duration-300"
      aria-label="Contact on WhatsApp"
    >
      <Phone size={28} className="fill-current" />
      
      {/* Pulse rings */}
      <span className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping opacity-75 duration-1000" />
    </motion.a>
  );
}
