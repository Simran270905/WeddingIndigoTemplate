"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import pattern from "../assets/image/pattern.png";

export default function Closing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: i * 0.2
      }
    })
  };

  return (
    <section
      className="py-24 px-6 text-center relative overflow-hidden bg-[#141827]"
      style={{
        backgroundImage: `url(${pattern})`,
        backgroundSize: "1000px 1000px",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-[#181d30]/95 via-[#141827]/95 to-[#0e1220]/98 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Animated radial glow */}
      <motion.div 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(240,231,213,0.18),transparent_60%)]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      <motion.div
        ref={ref}
        className="relative z-10 max-w-2xl mx-auto px-4" // Added max-width + padding fix
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* ✅ FIXED: Decorative top line - now properly centered */}
        <motion.div 
          className="mx-auto w-24 h-[2px] bg-gradient-to-r from-[#F0E7D5]/50 via-[#F0E7D5]/30 to-[#F0E7D5]/50 rounded-full pointer-events-none mb-12"
          variants={itemVariants}
          custom={0}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Animated closing message */}
        <motion.p 
          className="text-lg font-para md:text-xl leading-relaxed opacity-90 mb-10 text-[#F0E7D5]"
          variants={itemVariants}
          custom={1}
        >
          We look forward to celebrating love, laughter, and a lifetime of
          togetherness with you. Your presence will make our day truly
          unforgettable.
        </motion.p>

        {/* Animated couple names with glow */}
        <motion.p 
          className="font-chopin text-3xl md:text-4xl tracking-widest mb-6 text-[#F0E7D5] relative"
          variants={itemVariants}
          custom={2}
          whileHover={{ 
            scale: 1.03,
            textShadow: [
              "0 0 20px rgba(240,231,213,0.5)",
              "0 0 30px rgba(240,231,213,0.7)",
              "0 0 20px rgba(240,231,213,0.5)"
            ]
          }}
          transition={{ duration: 0.4 }}
        >
          Vansh & Mishti
        </motion.p>

        {/* ✨ Premium animated bouncing dots */}
        <motion.div 
          className="flex justify-center space-x-4 mt-6"
          variants={itemVariants}
          custom={3}
        >
          <motion.div 
            className="w-4 h-4 rounded-full bg-[#F0E7D5]/60 shadow-lg"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0.8, 1.3, 0.8],
              opacity: [0.6, 1, 0.6],
              y: [0, -12, 0]
            }}
            transition={{ 
              duration: 2.2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="w-4 h-4 rounded-full bg-[#F0E7D5]/40 shadow-md"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0.8, 1.2, 0.8],
              opacity: [0.4, 0.9, 0.4],
              y: [0, -10, 0]
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.4
            }}
          />
          <motion.div 
            className="w-4 h-4 rounded-full bg-[#F0E7D5]/60 shadow-lg"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0.8, 1.3, 0.8],
              opacity: [0.6, 1, 0.6],
              y: [0, -12, 0]
            }}
            transition={{ 
              duration: 2.2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.8
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
