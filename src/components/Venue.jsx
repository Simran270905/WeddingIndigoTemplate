"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import pattern from "../assets/image/pattern.png";

export default function Venue() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: i * 0.15
      }
    })
  };

  return (
    <section className="relative py-20 px-6 md:px-20 lg:px-24 bg-gradient-to-b from-[#1a2035] via-[#141827] to-[#0e1220] flex justify-center overflow-hidden">
      {/* Animated soft glow */}
      <motion.div 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(240,231,213,0.18),transparent_60%)]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Animated pattern */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-repeat opacity-5"
        style={{
          backgroundImage: `url(${pattern})`,
          backgroundSize: "1000px 1000px",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      />

      {/* Animated Venue Card */}
      <motion.div
        ref={ref}
        className="relative z-10 max-w-xl w-full group"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 30px 90px rgba(0,0,0,0.85), 0 0 0 1px rgba(240,231,213,0.15)"
        }}
        transition={{ duration: 0.4 }}
      >
        <motion.div 
          className="bg-[#212842]/95 border border-[#F0E7D5]/35 rounded-3xl px-8 py-10 md:px-12 md:py-12 shadow-[0_20px_60px_rgba(0,0,0,0.75)] backdrop-blur-sm text-center space-y-6 relative overflow-hidden"
          variants={itemVariants}
          custom={0}
          whileHover={{ 
            borderColor: "#F0E7D5",
            backgroundColor: "rgba(33,40,66,0.98)"
          }}
        >
          {/* ✨ Card shine effect */}
          <motion.div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 1.8, ease: "easeOut" }}
            />
            
            {/* Subtle sparkle corners */}
            <motion.div 
              className="absolute top-4 right-4 w-1.5 h-1.5 bg-white/40 rounded-full blur-sm"
              animate={{ 
                scale: [0, 1.3, 0],
                opacity: [0, 0.8, 0]
              }}
              transition={{ 
                duration: 1.4, 
                repeat: 1, 
                repeatDelay: 0.5,
                delay: 0.3
              }}
            />
            <motion.div 
              className="absolute bottom-4 left-4 w-2 h-2 bg-white/50 rounded-full blur-sm"
              animate={{ 
                scale: [0, 1.4, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: 1, 
                delay: 0.6
              }}
            />
          </motion.div>

          {/* Label */}
          <motion.p 
            className="text-[0.7rem] tracking-[0.35em] font-para font-bold uppercase text-[#F0E7D5]/70"
            variants={itemVariants}
            custom={1}
          >
            Venue
          </motion.p>

          {/* Main title with glow */}
          <motion.h2 
            className="text-3xl md:text-4xl font-choco text-[#F0E7D5] relative"
            variants={itemVariants}
            custom={2}
            whileHover={{ 
              textShadow: "0 0 20px rgba(240,231,213,0.6)",
              scale: 1.02
            }}
            transition={{ duration: 0.3 }}
          >
            Royal Heritage Palace
          </motion.h2>

          {/* Location */}
          <motion.p 
            className="text-lg md:text-xl font-font text-[#F0E7D5]/85 font-light tracking-wide"
            variants={itemVariants}
            custom={3}
          >
            Jaipur, Rajasthan
          </motion.p>

          {/* Note */}
          <motion.p 
            className="text-xs md:text-sm font-font text-[#F0E7D5]/70 tracking-[0.18em] uppercase font-light"
            variants={itemVariants}
            custom={4}
          >
            Detailed directions will be shared with the invitation
          </motion.p>

          {/* Animated accent motif */}
          <motion.div 
            className="flex items-center justify-center gap-3"
            variants={itemVariants}
            custom={5}
          >
            <motion.span 
              className="h-px w-10 bg-gradient-to-r from-transparent via-[#F0E7D5]/60 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            />
            <motion.span 
              className="w-2 h-2 rounded-full bg-[#F0E7D5]/85 shadow-md relative"
              animate={{ 
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 0 0 rgba(240,231,213,0.4)",
                  "0 0 8px 2px rgba(240,231,213,0.5)",
                  "0 0 0 0 rgba(240,231,213,0.4)"
                ]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            <motion.span 
              className="h-px w-10 bg-gradient-to-r from-transparent via-[#F0E7D5]/60 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
